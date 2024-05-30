let output;

const getSubscriptions =(subscription, routes) =>{
    for(let key in subscription){
        if(typeof subscription[key] === "object"){
            if(subscription[key]==true){
                console.log(subscription[key]);
            }
            getSubscriptions(subscription[key] ,routes);
        }else{
            console.log(key+":" +subscription[key], routes[key]);
        }
    }
    return 0;
}

const routes = [
    {
      name: 'M1',
      comp: 'C1',
    },
    {
      name: 'M2',
      comp: 'C2',
    },
    {
      name: 'M3',
      subComp: [
        {
          name: 'M3A',
          comp: 'C3A',
        },
        {
          name: 'M3B',
          comp: 'C3B',
        },
      ],
    },
    {
      name: 'M4',
      subComp: [
        {
          name: 'M4A',
          comp: 'C4A',
        },
        {
          name: 'M4B',
          comp: 'C4B',
        },
      ],
    },
    {
      name: 'M5',
      subComp: [
        {
          name: 'M5A',
          comp: 'C5A',
        },
        {
          name: 'M5B',
          subComp: [
            {
              name: 'M5BA',
              comp: 'C5BA',
            },
            {
              name: 'M5BB',
              comp: 'C5BB',
            },
            {
              name: 'M5BC',
              comp: 'C5BC',
            },
          ],
        },
        {
          name: 'M5C',
          comp: 'C5C',
        },
      ],
    },
  ];
  
  const subscription = [
    {
      name: 'M1',
      isSub: true,
    },
    {
      name: 'M2',
      isSub: false,
    },
    {
      name: 'M3',
      isSub: false,
      subMod: [
        {
          name: 'M3A',
          isSub: true,
        },
        {
          name: 'M3B',
          isSub: true,
        },
      ],
    },
    {
      name: 'M4',
      isSub: true,
      subMod: [
        {
          name: 'M4A',
          isSub: false,
        },
        {
          name: 'M4B',
          isSub: true,
        },
      ],
    },
    {
      name: 'M5',
      isSub: true,
      subMod: [
        {
          name: 'M5A',
          isSub: false,
        },
        {
          name: 'M5B',
          isSub: true,
  
          subComp: [
            {
              name: 'M5BA',
              isSub: false,
            },
            {
              name: 'M5BB',
              isSub: true,
            },
            {
              name: 'M5BC',
              isSub: false,
            },
          ],
        },
        {
          name: 'M5C',
          isSub: true,
        },
      ],
    },
  ];

console.log(getSubscriptions(subscription,routes));