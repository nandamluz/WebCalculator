import React,{useState} from 'react'

export default function Home() {
  const [valorTela, setValorTela] = useState('')
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)

const Tela=(valor, res) =>{
  return(
    <div style={cssTela}>
      <span style={cssTelaOper}>{valor}</span>
      <span style={cssTelaRes}>{res}</span>
    </div>
  )
}
const Btn=(label,onClick)=>{
  return(
    <button style={cssBtn} onClick={onClick}>{label}</button>
  )
}
const addDigitoTela=(d)=>{
  if((d=="+" || d=="-" || d=="*" || d=="/") && operado){
    console.log("+-*/")
    setOperado(false)
    setValorTela(resultado+d)
    return
  }
  if(operado){
    setValorTela(d)
    setOperado(false)
    return
  }
  const valorDigitadoTela=valorTela+d
  setValorTela(valorDigitadoTela)
}
const limparMemoria=()=>{
  setOperado(false)
  setValorTela("")
  setResultado(0)
  setAcumulador(0)
}
const Operacao=(oper)=>{
  if(oper =="bs"){
    let vtela=valorTela
    vtela=vtela.substring(0,(vtela.length-1))
    setValorTela(vtela)
    setOperado(false)
    return
  }
  try{
    const r=eval(valorTela)
    setAcumulador(r)
    setResultado(r)
    setOperado(true)
  }catch{
    setResultado("Erro")
  }
}
const cssContainer={
  display:"flex",
  justifyContent:"flex-start",
  alignItems:"center",
  flexDirection:"column",
  width:280,
  border:"1px solid #999999",
  borderRadius:10,
  fontFamily:"sans-serif",
  
}
const cssBotoes={
  flexDirection:"row",
  flexWrap:"wrap"
}


const cssTela={
  display:"flex",
  paddingLeft:20,
  paddingRight:20, 
  justifyContent:"center",
  alignItems:"flex-end",
  flexDirection:'column',
  width:250,
  height:100,
  margin:20,
}
const cssTelaOper={
  fontSize:30,
  color:"#000",
  height:20,
}
const cssTelaRes={
  fontSize:30,
  color:"#999999",
  height:20, 
  paddingTop:30,
}
const cssBtn={
  fontSize:20,
  height:60,
  width:60,
  margin:5,
  padding:20,
  borderRadius:50,
  backgroundColor:"#f5f5f5",
  color:"#000",
  border: "none",
  textAlign:"center",
  outline:"none",
}
 

  return (
    <>
    <div style={cssContainer}>   
    <h3>Calculadora</h3>
    {Tela(valorTela,resultado)}
    <div style={cssBotoes}>
    {Btn("AC",limparMemoria)} 
    {Btn("(",()=>addDigitoTela(")"))}
    {Btn(")",()=>addDigitoTela(")"))}
    {Btn("/",()=>addDigitoTela("/"))}
    {Btn("7",()=>addDigitoTela("7"))}
    {Btn("8",()=>addDigitoTela("8"))}
    {Btn("9",()=>addDigitoTela("9"))} 
    {Btn("*",()=>addDigitoTela("*"))}
    {Btn("4",()=>addDigitoTela("4"))}
    {Btn("5",()=>addDigitoTela("5"))}
    {Btn("6",()=>addDigitoTela("6"))}
    {Btn("-",()=>addDigitoTela("-"))}
    {Btn("1",()=>addDigitoTela("1"))}
    {Btn("2",()=>addDigitoTela("2"))}
    {Btn("3",()=>addDigitoTela("3"))}
    {Btn("+",()=>addDigitoTela("+"))}
    {Btn("0",()=>addDigitoTela("0"))}
    {Btn(".",()=>addDigitoTela("."))}
    {Btn("C",()=>Operacao("bs"))}
    {Btn("=",()=>Operacao("="))} 
    </div>
    </div>
    </>

  )
}
