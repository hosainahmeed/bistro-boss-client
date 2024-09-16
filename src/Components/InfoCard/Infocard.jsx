function Infocard() {
    const information = [
      {
        _id: 0,
        title: "Phone",
        details: "+38 (012) 34 56 789",
      },
      {
        _id: 1,
        title: "Address",
        Street: "123 ABS Street, Uni 21, Bangladesh",
      },
      {
        _id: 2,
        title: "Working Hours",
        start: "Mon - Fri: 08:00 - 22:00",
        end: "Sat - Sun: 10:00 - 23:00",
      },
    ];
  
    const icons = [1,2,3];
  
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {information.map((info, index) => (
              <div key={info._id} className="flex flex-col items-center justify-center text-center">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  {icons[index]} 
                </span>
                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">{info.title}</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{info.details || info.Street || info.start}</p>
                {info.end && <p className="mt-2 text-gray-500 dark:text-gray-400">{info.end}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Infocard;
  