import React from 'react'
import ReactDOM from 'react-dom'
import Med1 from './images/med1.jpg'
import './Cartao.css'

const App = ()=>{

    const estilo1 = () => {
        return{
            margin: 'auto',
            width: '95%',
            backgroundColor: '#EEE',
            padding: 12,
            borderRadius: 8,
            border: '0.5px solid',
            fontWeight: 'bold',
            textAlign: 'center'
        }
    }

    const nomeMedicos = {
        med1: 'José da Silva',
        med2: 'Maria da Silva',
        med3: 'Jaqueline Mendes'
    }


    return (
            <div style={estilo1()}>
                <p>Profissionais de saúde</p>
                {/* estilo 2*/}
                <div  style={{margin: 'auto', width: '100%', backgroundColor: '#EEE', padding: 12, borderRadius: 8,
                border: '0.5px solid gray', boxSizing:'border-box'}}>
                    <div class="cartao" >
                        <img  src={Med1} />
                        <p>{nomeMedicos.med1}</p>
                    </div>
                        
                    <div class="cartao" >
                        <img  src={process.env.PUBLIC_URL + "/med2.jpg"} />
                        <p>{nomeMedicos.med2}</p>
                    </div>
        
                    <div class="cartao" >
                        <img  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFmmbyHYyGBDBhvJ9hhkfU2VKs250OFjIPH_QL0eiNyDmp3gFsJgvfpZ_ehgTE6oYqEI&usqp=CAU"} />
                        <p>{nomeMedicos.med3}</p>
                    </div>                       
                </div>
            </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)
