import React from 'react'
import './tab.css'
function Tab() {
  return (
    <>
 <div>
  
 <div className="container mx-auto p-4">
  <div className="main-body">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="mb-4">
        <div className="card bg-white shadow-md rounded-lg p-4">
          <div className="flex flex-col items-center text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-full w-36 h-36" />
            <div className="mt-3">
              <h4 className="text-lg font-semibold">John Doe</h4>
              <p className="text-gray-500 mb-1">Full Stack Developer</p>
              <p className="text-gray-400 text-sm">Bay Area, San Francisco, CA</p>
              <button className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-lg mr-2">Follow</button>
              <button className="btn btn-outline-primary border border-blue-500 text-blue-500 py-2 px-4 rounded-lg">Message</button>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-md rounded-lg p-4 mt-4">
          <ul className="list-group">
            <li className="flex justify-between items-center py-2">
              <h6 className="text-gray-700 font-semibold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx={12} cy={12} r={10} />
                  <line x1={2} y1={12} x2={22} y2={12} />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Website
              </h6>
              <span className="text-gray-500">https://bootdey.com</span>
            </li>
            <li className="flex justify-between items-center py-2">
              <h6 className="text-gray-700 font-semibold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                Github
              </h6>
              <span className="text-gray-500">bootdey</span>
            </li>
            <li className="flex justify-between items-center py-2">
              <h6 className="text-gray-700 font-semibold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
                Twitter
              </h6>
              <span className="text-gray-500">@bootdey</span>
            </li>
            <li className="flex justify-between items-center py-2">
              <h6 className="text-gray-700 font-semibold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </h6>
              <span className="text-gray-500">chandu</span>
            </li>
            <li className="flex justify-between items-center py-2">
              <h6 className="text-gray-700 font-semibold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </h6>
              
              <span className="text-gray-500">chandu</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3">
        <div className="card bg-white shadow-md rounded-lg p-4 mb-4">
          <div className="card-body">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4">
                <h6 className="text-gray-700 font-semibold">Full Name</h6>
              </div>
              <div className="w-full md:w-3/4 text-gray-500">
                Kenneth Valdez
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4">
                <h6 className="text-gray-700 font-semibold">Email</h6>
              </div>
              <div className="w-full md:w-3/4 text-gray-500">
                fip@jukmuh.al
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4">
                <h6 className="text-gray-700 font-semibold">Phone</h6>
              </div>
              <div className="w-full md:w-3/4 text-gray-500">
                (239) 816-9029
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4">
                <h6 className="text-gray-700 font-semibold">Mobile</h6>
              </div>
              <div className="w-full md:w-3/4 text-gray-500">
                (320) 380-4539
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4">
                <h6 className="text-gray-700 font-semibold">Address</h6>
              </div>
              <div className="w-full md:w-3/4 text-gray-500">
                Bay Area, San Francisco, CA
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex">
              <a className="btn bg-blue-500 text-white py-2 px-4 rounded-lg" path="/edit.jsx" target="" href="">Edit</a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card bg-white shadow-md rounded-lg p-4 h-full">
            <div className="card-body">
              <h6 className="flex items-center mb-3">
                <i className="material-icons text-blue-500 mr-2">assignment</i>Project Status
              </h6>
              <div className="mb-3">
                <small>Web Design</small>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{"width":"80%"}} />
                </div>
              </div>
              <div className="mb-3">
                <small>Website Markup</small>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{"width":"72%"}} />
                </div>
              </div>
              <div className="mb-3">
                <small>One Page</small>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{"width":"89%"}} />
                </div>
              </div>
              <div className="mb-3">
                <small>Mobile Template</small>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{"width":"55%"}} />
                </div>
              </div>
              <div className="mb-3">
                <small>Backend API</small>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{"width":"66%"}} />
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-4 h-full">
            <div className="card-body">
              <h6 className="flex items-center mb-3">
                <i className="material-icons text-blue-500 mr-2">assignment</i>Project Status
              </h6>
              <div className="mb-3">
                <small>Web Design</small>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{"width":"80%"}} />
                </div>
              </div>
              <div className="mb-3">
                <small>Website Markup</small>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{"width":"72%"}} />
                </div>
              </div>
              <div className="mb-3">
                <small>One Page</small>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{"width":"89%"}} />
                </div>
              </div>
              <div className="mb-3">
                <small>Mobile Template</small>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{"width":"55%"}} />
                </div>
              </div>
              <div className="mb-3">
                <small>Backend API</small>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{"width":"66%"}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</div>
</div>

    </>
   

)
}

export default Tab