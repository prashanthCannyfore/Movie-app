import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center w-full h-screen bg-black">
       

      <div className="w-full p-4 text-center ">
      <Skeleton
          width="75%"
          height={24}
          baseColor="#333"
          className='mb-2'
          highlightColor="#444"
        />
      <Skeleton
          width="75%"
          height={24}
          baseColor="#333"
          className='mb-2'
          highlightColor="#444"
        />
      <Skeleton
          width="50%"
          height={20}
        
          baseColor="#333"
          highlightColor="#444"
        />
      <Skeleton
          width="75%"
          height={24}
          baseColor="#333"
          highlightColor="#444"
        />
        <Skeleton
          width="75%"
          height={24}
          baseColor="#333"
          highlightColor="#444"
        />
        <Skeleton
          width="50%"
          height={24}
          className="mt-4"
          baseColor="#333"
          highlightColor="#444"
        />
        <Skeleton
          width="50%"
          height={20}
        
          baseColor="#333"
          highlightColor="#444"
        />

         <Skeleton
          width="75%"
          height={24}
          baseColor="#333"
          className="mt-4"

          highlightColor="#444"
          
        />



<Skeleton
          width="75%"
          height={24}
          baseColor="#333"
          highlightColor="#444"
        />
        <Skeleton
          width="50%"
          height={24}
          className="mt-4"
          baseColor="#333"
          highlightColor="#444"
        />
        <Skeleton
          width="50%"
          height={20}
        
          baseColor="#333"
          highlightColor="#444"
        />
        <Skeleton
          width="50%"
          height={20}
        
          baseColor="#333"
          highlightColor="#444"
        />

         <Skeleton
          width="75%"
          height={24}
          baseColor="#333"
          className="mt-4"

          highlightColor="#444"
          
        />
         <Skeleton
          width="75%"
          height={24}
          baseColor="#333"
          className="mt-4"

          highlightColor="#444"
          
        />
      </div>
    </div>
  );
};

export default Loader;
