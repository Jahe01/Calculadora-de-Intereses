from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

def calcular_interes_simple(valor_inicial, tasa_interes, periodos):
    return valor_inicial * (1 + tasa_interes * periodos)

def calcular_interes_compuesto(valor_inicial, tasa_interes, periodos):
    return valor_inicial * (1 + tasa_interes) ** periodos

@app.route('/calcular', methods=['POST'])
def calcular():
    data = request.json
    valor_inicial = data['valor_inicial']
    tasa_interes = data['tasa_interes'] / 100
    periodos = data['periodos']
    tipo_interes = data['tipo_interes']

    valores = [valor_inicial]
    for i in range(1, periodos + 1):
        if tipo_interes == "simple":
            valor = calcular_interes_simple(valor_inicial, tasa_interes, i)
        else:
            valor = calcular_interes_compuesto(valor_inicial, tasa_interes, i)
        valores.append(valor)
    
    return jsonify({'valores': valores})

@app.route('/grafico', methods=['POST'])
def grafico():
    data = request.json
    valor_inicial = data['valor_inicial']
    tasa_interes = data['tasa_interes'] / 100
    periodos = data['periodos']
    tipo_interes = data['tipo_interes']

    valores = []
    for i in range(periodos + 1):
        if tipo_interes == "simple":
            valor = calcular_interes_simple(valor_inicial, tasa_interes, i)
        else:
            valor = calcular_interes_compuesto(valor_inicial, tasa_interes, i)
        valores.append(valor)

    labels = [f'Periodo {i}' for i in range(periodos + 1)]

    return jsonify({'labels': labels, 'valores': valores})

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
