// eslint-disable-next-line no-unused-vars
import React from 'react'

const Skills= () => {
  return (
    <> 
<section id="skills" class="py-32 flex justify-center items-center px-3 text-white">

  <div class="container mx-auto">
    <h2 class=" text-violet-950 text-3xl font-bold text-center mb-8">Skills</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <li class="bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg rounded-lg p-6 text-center hover:from-indigo-600 hover:to-purple-600 transition duration-300">
        <ion-icon name="code-slash-outline" class="text-5xl mb-4"></ion-icon>
        <h3 class="text-lg font-semibold mb-2">HTML</h3>
        <p class="text-sm">Experience Level: Advanced</p>
      </li>
      <li class="bg-gradient-to-br from-red-500 to-pink-500 shadow-lg rounded-lg p-6 text-center hover:from-pink-600 hover:to-red-600 transition duration-300">
        <ion-icon name="brush-outline" class="text-5xl mb-4"></ion-icon>
        <h3 class="text-lg font-semibold mb-2">CSS</h3>
        <p class="text-sm">Experience Level: Advanced</p>
      </li>
      <li class="bg-gradient-to-br from-yellow-500 to-green-500 shadow-lg rounded-lg p-6 text-center hover:from-green-600 hover:to-yellow-600 transition duration-300">
        <ion-icon name="logo-javascript" class="text-5xl mb-4"></ion-icon>
        <h3 class="text-lg font-semibold mb-2">JavaScript</h3>
        <p class="text-sm">Experience Level: Intermediate</p>
      </li>
      <li class="bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg rounded-lg p-6 text-center hover:from-cyan-600 hover:to-blue-600 transition duration-300">
        <ion-icon name="logo-react" class="text-5xl mb-4"></ion-icon>
        <h3 class="text-lg font-semibold mb-2">React.js</h3>
        <p class="text-sm">Experience Level: Intermediate</p>
      </li>
      <li class="bg-gradient-to-br from-gray-500 to-gray-600 shadow-lg rounded-lg p-6 text-center hover:from-gray-600 hover:to-gray-700 transition duration-300">
        <ion-icon name="logo-python" class="text-5xl mb-4"></ion-icon>
        <h3 class="text-lg font-semibold mb-2">Python</h3>
        <p class="text-sm">Experience Level: Intermediate</p>
      </li>
      <li class="bg-gradient-to-br from-gray-500 to-gray-600 shadow-lg rounded-lg p-6 text-center hover:from-gray-600 hover:to-gray-700 transition duration-300">
        <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="Express.js" class="w-16 mx-auto mb-4"/>
        <h3 class="text-lg font-semibold mb-2">Express.js</h3>
        <p class="text-sm">Experience Level: Intermediate</p>
      </li>
      <li class="bg-gradient-to-br from-green-400 to-green-600 shadow-lg rounded-lg p-6 text-center hover:from-green-600 hover:to-green-800 transition duration-300">
        <img src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" alt="MongoDB" class="w-16 mx-auto mb-4"/>
        <h3 class="text-lg font-semibold mb-2">MongoDB</h3>
        <p class="text-sm">Experience Level: Intermediate</p>
      </li>
     
      <li class="bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg rounded-lg p-6 text-center hover:from-teal-600 hover:to-teal-800 transition duration-300">
        <ion-icon name="logo-nodejs" class="text-5xl mb-4"></ion-icon>
        <h3 class="text-lg font-semibold mb-2">Node.js</h3>
        <p class="text-sm">Experience Level: Intermediate</p>
      </li>
   
    </ul>
  </div>
</section>


      </>
  )
}

export default Skills