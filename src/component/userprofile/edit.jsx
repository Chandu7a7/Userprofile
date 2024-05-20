import React from 'react'
function Edit() {
  return (
    <>
 <div>

 <div className="container mx-auto p-4">
  <div className="main-body">
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 p-2">
        <div className="card bg-white shadow-md rounded-lg p-4">
          <div className="card-body text-center">
            <div className="flex flex-col items-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-full p-1 bg-blue-500" width={110} />
              <div className="mt-3">
                <h4>John Doe</h4>
                <p className="text-gray-500 mb-1">Full Stack Developer</p>
                <p className="text-gray-400 text-sm">Bay Area, San Francisco, CA</p>
                <button className="btn bg-blue-500 text-white py-2 px-4 rounded-lg mr-2">Follow</button>
                <button className="btn bg-transparent border border-blue-500 text-blue-500 py-2 px-4 rounded-lg">Message</button>
              </div>
            </div>
            <hr className="my-4" />
            <ul className="list-none">
              <li className="flex justify-between items-center py-2">
                <h6 className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx={12} cy={12} r={10} />
                    <line x1={2} y1={12} x2={22} y2={12} />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  Website
                </h6>
                <span className="text-gray-500">https://abc.com</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <h6 className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  Github
                </h6>
                <span className="text-gray-500">chandu</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <h6 className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  Twitter
                </h6>
                <span className="text-gray-500">@chandu</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <h6 className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Instagram
                </h6>
                <span className="text-gray-500">chandu</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <h6 className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </h6>
                <span className="text-gray-500">chandu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 p-2">
        <div className="card bg-white shadow-md rounded-lg p-4 mb-4">
          <div className="card-body">
            <div className="mb-3">
              <div className="flex items-center mb-2">
                <div className="w-1/4">
                  <h6 className="text-gray-700">Full Name</h6>
                </div>
                <div className="w-3/4">
                  <input type="text" className="form-control w-full p-2 border border-gray-300 rounded" defaultValue="John Doe" />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-1/4">
                  <h6 className="text-gray-700">Email</h6>
                </div>
                <div className="w-3/4">
                  <input type="text" className="form-control w-full p-2 border border-gray-300 rounded" defaultValue="john@example.com" />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-1/4">
                  <h6 className="text-gray-700">Phone</h6>
                </div>
                <div className="w-3/4">
                  <input type="text" className="form-control w-full p-2 border border-gray-300 rounded" defaultValue="(239) 816-9029" />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-1/4">
                  <h6 className="text-gray-700">Mobile</h6>
                </div>
                <div className="w-3/4">
                  <input type="text" className="form-control w-full p-2 border border-gray-300 rounded" defaultValue="(320) 380-4539" />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-1/4">
                  <h6 className="text-gray-700">Address</h6>
                </div>
                <div className="w-3/4">
                  <input type="text" className="form-control w-full p-2 border border-gray-300 rounded" defaultValue="Bay Area, San Francisco, CA" />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="btn bg-blue-500 text-white py-2 px-4 rounded-lg">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-white shadow-md rounded-lg p-4">
          <div className="card-body">
            <h5 className="text-gray-700 mb-3">Project Status</h5>
            <div className="mb-3">
              <p>Web Design</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{"width":"80%"}} />
              </div>
              <p>Website Markup</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                <div className="bg-red-500 h-1.5 rounded-full" style={{"width":"72%"}} />
              </div>
              <p>One Page</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                <div className="bg-green-500 h-1.5 rounded-full" style={{"width":"89%"}} />
              </div>
              <p>Mobile Template</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                <div className="bg-yellow-500 h-1.5 rounded-full" style={{"width":"55%"}} />
              </div>
              <p>Backend API</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-teal-500 h-1.5 rounded-full" style={{"width":"66%"}} />
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

export default Edit