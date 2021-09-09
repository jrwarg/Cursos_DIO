/**
 * getElementById() 
 const element = document.getElementById("blog-title")
 
 console.log(element)
 
 getElementByClassName()
 const element = document.getElementsByClassName("blog-title")
 
 getElementByTagName()
 
 const element = document.getElementsByTagName("h1")
 
 
 // querySelector()
 
 const element = document.querySelector('title')
 console.log(element)
 
 // querySelectorAll()
 
 const elements = document.querySelectorAll("#one")
 
 elements.forEach(el => console.log(el))
 
 // ** Diferença entre HTMLCollection e NodeList
 //NodeList aceita a execução de estruturas de repetição, por exemplo: forEach
 
Qual usar?

getElementById (element)
getElementByClassName (HTMLCollection)
getelementByTagName (HTMLCollection)
querySelector (element)
querySelectorAll (Nodelist)

 */