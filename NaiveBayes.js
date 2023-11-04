const data = [
    {
      index: 0,
      outlook: "Rainy",
      play: "Yes",
    },
    {
      index: 1,
      outlook: "Sunny",
      play: "Yes",
    },
    {
      index: 2,
      outlook: "Overcast",
      play: "Yes",
    },
    {
      index: 3,
      outlook: "Overcast",
      play: "Yes",
    },
    {
      index: 4,
      outlook: "Sunny",
      play: "No",
    },
    {
      index: 5,
      outlook: "Rainy",
      play: "Yes",
    },
    {
      index: 6,
      outlook: "Sunny",
      play: "Yes",
    },
    {
      index: 7,
      outlook: "Overcast",
      play: "Yes",
    },
    {
      index: 8,
      outlook: "Rainy",
      play: "No",
    },
    {
      index: 9,
      outlook: "Sunny",
      play: "No",
    },
    {
      index: 10,
      outlook: "Sunny",
      play: "Yes",
    },
    {
      index: 11,
      outlook: "Rainy",
      play: "No",
    },
    {
      index: 12,
      outlook: "Overcast",
      play: "Yes",
    },
    {
      index: 13,
      outlook: "Overcast",
      play: "Yes",
    },
  ];
  
  // console.log(data)
  // console.log(data.length); //14
  const playYesCount = data.filter((item) => item.play === "Yes").length; //10
  const playNoCount = data.length - playYesCount;
  
  const outlookRainy = data.filter((item) => item.outlook === "Rainy").length; //4
  const rainyYes = data.filter(
    (item) => item.outlook === "Rainy" && item.play === "Yes"
  ).length;
  const rainyNo = outlookRainy - rainyYes;
  
  const outlookSunny = data.filter((item) => item.outlook === "Sunny").length; //5
  const sunnyYes = data.filter(
    (item) => item.outlook === "Sunny" && item.play === "Yes"
  ).length;
  const sunnyNo = outlookSunny - sunnyYes;
  
  const outlookOvercast = data.filter(
    (item) => item.outlook === "Overcast"
  ).length; //5
  const overcastYes = data.filter(
    (item) => item.outlook === "Overcast" && item.play === "Yes"
  ).length;
  const overcastNo = outlookOvercast - overcastYes;
  
  // console.log(outlookOvercast)
  // console.log(outlookSunny)
  
  const c1 = playYesCount / data.length;
  const c2 = playNoCount / data.length;
  
  const x1 = sunnyYes / playYesCount;
  const x2 = sunnyNo / playNoCount;
  
  
  
  const f1 = c1 * x1
  const f2 = c2 * x2
  
  if (f1 > f2)
  console.log("PLAY = YES") 
  else
  console.log("PLAY = NO")