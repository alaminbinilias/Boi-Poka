const GetItemLocal = () => {
  const localData = localStorage.getItem("ReadList");
  if (localData) {
    const ParseLocalData = JSON.parse(localData);
    return ParseLocalData;
  } else {
    return [];
  }
}


const SetItemLocal =(id)=>{
  //console.log(id);
  const Data=GetItemLocal(id);
  if(Data.includes(id)){
    alert("This item Already Exits");
  }
  else{
    Data.push(id);
    const Dta=JSON.stringify(Data);
    localStorage.setItem("ReadList",Dta);
  }
}


export {SetItemLocal};

//const setItemLocal = (id) => {

  // else {
  //   //const dta = setData.push(id);
  //   //const data = JSON.stringify(dta);
  //   //localStorage.setItem("ReadList", data);
  // }
//};
