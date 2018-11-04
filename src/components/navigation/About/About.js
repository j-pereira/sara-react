import React from 'react';

const about = (props) => {
    return (
        <div className="container pt-3 pb-3">
            <p className="text-center p-2"> <strong> SARA - Software para Análise de Regiões Ativas</strong> </p>
            <p className="text-center">SARA é um software que permite análise de explosões solares a partir de regiões ativas. Ele permite: </p>
            <ul className="text-justify">
                <li className="p-2">Possibilidade de consultar diariamente os dados relacionados às regiões ativas e os eventos produzidos por elas. Você pode escolher: o tipo da base de dados a ser consultada; tipos de atributos escolhidos para consulta; e o período, podendo ser de 1997 até o dia atual da consulta.</li>
                <li className="p-2">Possibilidade de criar regras de associação, considerando as mesmas funcionalidades presentes na consulta à base  de dados, podendo definir também  os índices de suporte e confiança mínimos a seres utilizados.</li>
                <li className="p-2">Exportar a base de dados consultada e as regras de associação geradas para o formato CSV, podendo assim utilizar esses dados em outras ferramentas.</li>
            </ul>
            <p className="text-justify"> A base de dados criada por SARA é o resultado da união de dois arquivos de dados disponibilizados pelo SWPC, Solar Region Summary (SRS) e Solar and Geophysical Activity Summary (SGAS) (SWPC, 2018).</p>
            <p> O arquivo SRS contem os dados referentes as características das regiões ativas e, SGAS, sobre os eventos produzidos por elas. Juntos, é possível analisar quais eventos foram produzidos por determinadas regiões ativas.</p>
            <p>Em relação as regiões ativas, são considerados os seguintes atributos: </p>
            <ul className="text-justify">
                <li className="p-2">Área da região ativa medida em Milionésimos da Área do Disco Solar (MADS)</li>
                <li className="p-2">Número de manchas observadas</li>
                <li className="p-2">Classificação magnética da mancha solar, por Mt. Wilson</li>
            </ul>
            <p>Em relação aos eventos, são considerados os seguintes atributos: </p>
            <ul className="text-justify">
                <li className="p-2">Explosões solares medidas através do fluxo de raio-X</li>
                <li className="p-2">Fluxo de rádio (10.7cm)</li>
            </ul>
            <p>No menu Regras de Associação, é possível gerar regras de associação com a base de dados baseada em regiões ativas, podendo também escolher os parâmetros utilizados: atributos, período e níveis de suporte e confiança.</p>
            
        </div>
    )
}

export default about;