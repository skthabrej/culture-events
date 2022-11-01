import './App.css'
import Events from './components/Events'

const cultureDetailsList = [
  {
    id:1,
    imageUrl:"https://i.postimg.cc/HxSbV0BN/dal-aa.jpg",
    imageAlt:"festival",
    belongsTo: "Canada,America",
    eventName:"Canada Dance Festival",

  },
  {
    id:2,
    imageUrl:"https://i.postimg.cc/bJFp5GQP/Kathakali-Kerala-2.jpg",
    imageAlt:"festival",
    belongsTo:"Puthanalkkal kalavela",
    eventName: "Karnataka,India",
  },
  {
    id:3,
    imageUrl:"https://i.postimg.cc/8Cg5dnGS/Bharathanatyam.jpg",
    imageAlt:"festival",
    belongsTo:"Kerala,India",
    eventName: "Nithyopahara",

  },
  {
    id:4,
    imageUrl:"https://i.postimg.cc/85jzT8BL/Samanvay-01.jpg",
    imageAlt:"festival",
    belongsTo:"Andhra Pradesh,India",
    eventName: "Shivam",
  },
  {
    id:5,
    imageUrl:"https://i.postimg.cc/HxSbV0BN/dal-aa.jpg",
    imageAlt:"festival",
    belongsTo:"Tamilnadu,India",
    eventName: "Janapada-Kolatam",
  
  },
  {
    id:6,
    imageUrl:"https://i.postimg.cc/HxSbV0BN/dal-aa.jpg",
    imageAlt:"festival",
    belongsTo:"Washington,America",
    eventName: "Colonial Fest",

  },
]

const App = () => <Events cultureDetailsList={cultureDetailsList} />

export default App