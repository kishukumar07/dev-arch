contextApi + leap
-shortcut used Rfce

think like that if i have to pass props from one child to another
eg.. D -> G (ref: image ss)
we are not allowed to do it ..

One solution is ..
we have to declare state in its common parent...............................
leveling up state
and passing props to both child

eg ..
Declared State in A
passed to B -> D
passed to C -> G

[Passing props to diff level of components]

HERE COMES ...
CONTEXT API ...........................................
ALLOWS YOU TO PASS props IN from One Component to another without passing Passing it to diff level of Components...

{used Context api from A->D && A->G}

Then we build a seperate component [CounterContextComponent]  {children is special type of props => contains all the child compnent like B and C}...............................

A <==> CounterContextComponent <==> D /G



<!-- always use optional channing while using contextapi props -->