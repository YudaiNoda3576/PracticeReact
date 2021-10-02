function App() {

  return (
    <div>
      <label　htmlFor="bar">bar</label>
      <input type="text" onClick={()=> {alert('I am clicked!')}}/>
    </div>
  );
}

// class App extends Comment{
//   render(){
//     return(
//       <div>
//         <label　htmlFor="bar">bar</label>
//         <input type="text" onClick={()=> {alert('I am clicked!')}}/>
//       </div>
//     )
//   }
// }

export default App;
