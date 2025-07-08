// import Image from "next/image";
import { useEffect } from "react";
// import { json } from "stream/consumers";

export default function Home(props) {
  // useEffect(() => {
  //   console.log(props.data);
  // }, []); //[client side rendering] this will be executed on the client side ...

  return (
    <div>
      <h1>Hello App</h1>
      {props.data
        ? props.data.map((el) => <h1 key={el.id}>{JSON.stringify(el)}</h1>)
        : null}
    </div>
  );
}

// [SSG]  --> this code is going to run on server then it will create a component  using this data we are creating static html  and after that we are doing static side generation [html is rendered to client ] ...
//! Run on server
export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:8080/users`);
  const data = await res.json();

  return {
    props: {
      data,
      dir: __dirname,
    },
  };
}; //we can acess the database here ...


//similarly we have getServerSideProps= >  it will do a server side rendering ...
