import React  from "react";

function Card ({username = "user"}){

      return (
        <div className="p-4 bg-gray-200 rounded-lg max-w-sm shadow-lg text-center " >
          <img 
            src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=" 
            alt="Chuiya" 
            className="w-full h-40 object-cover rounded-lg" 
          />
          <p className="mt-3 text-2xl text-black ">{username}</p>
          <p className="mt-3 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kya chuiya ha! 🤣
          </p>
          <button>Click me</button>
        </div>
      );
    };
    
    
export default Card