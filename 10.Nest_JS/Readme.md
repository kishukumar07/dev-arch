[NEST_JS]

HOW THE RENDERING WORKS??  
 DIFF WAYS OF RENDERING .?

Client side rendering : => sending html to the client and fetching data from it ... is known as client side rendering ..

THERE ARE TWO WAYS OF RENDERING ...

1. [html created in dom] => client side rendering
   -render
   -fetch
   -create
   -render

2. [Html created in server] = > serverside rendering
   -Fetch the data from db
   -create html
   -render

search => what is the adv and dis of client vs server side rendering

THE TWO BIGGEST DISADVANTAGE OF REACT WAS
-->BAD SEO
-->ITS WORKS COMPLETE WITH JS CODE ONLY THE ONLY HTML IS <DIV> ONLY
--> JS IS SLOW AS COMPARE TO HTML IN DOM(client) Rendering ..

[NExT_JS] => what next js does is it Compiles the React code[full_built_with_js] in the nodejs_Backend

=> EVERY REACT JS CODE WILL BE RUN IN NEXTJS AS WELL 100%.

==> but there is one problem we'cant able to compile the dom[something about part of window object] like (localstorage) in backend ... in react we are able cause it compiles code in client side
but in next js which is a fullStackFrameWork > > > > > localStoage like things cant be compiled [LS_IS_NOT_PRESENT-IN-BACKEND]... so whats the solution ...

[if-u-feel-something-that-is-part-of-window-obj-next-doesnt-allow-it-to-write/use-directly]

THIS IS THE ONLY DIFF IN REACT VS NEXT = > AND ALL WILL BE EXACT SIMILAR TO REACT IN NEXTJS
JUST REMEMBER ONLY THING

NEXT COMPILES IN SERVERSIDE FIRST WHERE WINDOW_OBJECT ARE NOT ACCESSABLE..

<!--SOLN:- >  so we have to write it under the useEffect  -->

 <!-- npx create-next-app ./ -->

<!-- [Next js is a full stack framework ] -->

we saw -> [Routing]
we saw -> [NestedRouting]
we saw -> [route-params]

Diff types of rendering in Next
[SSG] [SSR] [ISG]

- SSG – Static Site Generation
- SSR – Server-Side Rendering
- ISG – Incremental Static Generation

-npm run build [build app for production ] -> npm start ..
npx json-server --watch db.json --port 8080

we saw nest js supports two types of rendering ...

getStaticProps [SSG]--> npm run build -> npm start->(creation and rendering of static files)

getServerSideProps [SSE] --> npm run dev (creation and rendering on each client req)

getStaticProps[ISG] --> rebuilding the static files after given revalidate time
//revalidate feature may not work in every cdn (cloudfront by aws ) while deploying its a very specific feature of nextjs (vercel<->they build next js )supports this ...

Thats all we say 3 types of Rendering in nextJs
