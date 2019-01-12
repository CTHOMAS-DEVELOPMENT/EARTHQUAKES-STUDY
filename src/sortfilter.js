
export const sortFilter= ({ earthquakes, text, sortBy, lmag = "0", hmag = "0" }) => {
  let result=[];

  //Filter for magnitude range
  if(parseFloat(lmag) <  parseFloat(hmag))
  {
    result=earthquakes.filter((earthquake)=>{
      const lValueGood=parseFloat(earthquake.properties.mag) > parseFloat(lmag);
      const hValueGood=parseFloat(earthquake.properties.mag) < parseFloat(hmag);
      return lValueGood && hValueGood?true:false;
    }
    )
  }
  else
  {
    result=earthquakes;
  }

  //Filter for magnitude type
  let filteredList = result;
  filteredList=filteredList.filter(obj => {
      if(obj.properties)
      {
        if(obj.properties.magType === null) return false;
        const lCaseDesc = obj.properties.magType.toLowerCase();
        const lCaseSrch = text.toLowerCase();
        const textMatch = lCaseDesc.indexOf(lCaseSrch) > -1 ? true : false;
        return textMatch;
      }
    }).sort((a, b) => {
      if (sortBy === "magType") {
        return a.properties.magType > b.properties.magType ? 1 : -1;
      } else {
        return a.properties.mag > b.properties.mag ? -1 : 1;
      }
    })    
    return { earthquakes: filteredList, text: text, sortBy: sortBy };
};

