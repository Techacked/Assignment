import { InputField } from "./components/InputField/InputField";
import { DataTable } from "./components/DataTable/DataTable";

function App() {
  const data = [
    { id: 1, name: "Kasif", age: 22 },
    { id: 2, name: "Aarav", age: 25 },
    { id: 3, name: "Neha", age: 20 },
  ];

  type Column<T> = {
    key: string;
    title: string;
    dataIndex: keyof T;
    sortable?: boolean;
  };

  const columns: Column<{ id: number; name: string; age: number; }>[] = [
    { key: "name", title: "Name", dataIndex: "name", sortable: true },
    { key: "age", title: "Age", dataIndex: "age", sortable: true },
  ];

  
  const primaryColor = "blue-600";
  
  const sectionBaseStyle = "group p-10 rounded-xl shadow-lg transition-all duration-300";


  return (
    
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      
    
      <header className="flex justify-between items-center px-10 py-5 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-md sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
          Forntend Component 
        </h1>
        
      </header>

      
      <section className="relative py-16 text-center">
        
        
        <h2 className={`text-4xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight`}>
         ASSIGNMENT
        </h2>
        
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto mt-12 space-y-12 px-6 md:px-10 pb-20">
        
        {/* InputField Section (Professional Card) */}
        <section
          className={`${sectionBaseStyle} bg-white dark:bg-gray-900 
                     hover:shadow-xl dark:hover:shadow-2xl 
                     hover:scale-[1.005] border border-gray-100 dark:border-gray-800`}
        >
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
          
            <div className={`h-10 w-10 flex items-center justify-center bg-${primaryColor} text-white rounded shadow-md`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              FORNTEND
            </h2>
          </div>

          <p className="text-gray-800 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl">
            
          </p>

          <div className="max-w-xl space-y-6 mx-auto">
            
            <div className="py-3">
              <InputField
                label="Username"
                placeholder="Enter username"
                helperText="Must be unique and between 6-18 characters"
                
              />
            </div>
            
            
            <div className="py-3">
              <InputField
                label="Email Address"
                placeholder="e.g., john.doe@company.com"
                invalid
                errorMessage="This email format is invalid or already in use."
                
              />
            </div>
            
            <div className="py-3">
              <InputField label="Disabled Field" placeholder="Read-only information" disabled />
            </div>
          </div>
        </section>

        
        <section
          className={`${sectionBaseStyle} bg-white dark:bg-gray-900 
                     hover:shadow-xl dark:hover:shadow-2xl 
                     hover:scale-[1.005] border border-gray-100 dark:border-gray-800`}
        >
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
            <div className={`h-10 w-10 flex items-center justify-center bg-${primaryColor} text-white rounded shadow-md`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m4 0a2 2 0 002 2h2a2 2 0 002-2m4 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v14m-4 0h6"></path></svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Data Table 
            </h2>
          </div>

          

          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <DataTable data={data} columns={columns} selectable />
          </div>
        </section>
      </main>

      
    </div>
  );
}

export default App;