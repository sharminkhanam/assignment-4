        #1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
        Answer: 
            

                getElementByID          : Selects one element using its unique ID.

                getElementsByClassName  : Selects all elements with the same class name . And return HTMLColletion.

                querySelector           : Selects the first element matches a CSS  selector.

                querySelectorAll        : Selects all element that match a CSS selector and return NodeList.
        #2. How do you create and insert a new element into the DOM?
        Answer :

                create          : create an element using = document.createElement().
                                    Example : let div = document.createElement("div").

                Add content     : Add content to the element .
                                Example :  div.textContent = "Hello".
                Insert          : Insert into the OM using = appendChild().
                                Example : document.body.appendChild(div).
        #3. What is Event Bubbling? And how does it work?

        Answer : 
                    Event bubbling is a process where an event starts from the target element 
                    and tehe moves upward to its parent elements in the DOM. 

                    Example : child->parent->grandparent->document.


        #4. What is Event Delegation in JavaScript? Why is it useful?
        Answer : 

                Event Delegation  is a process where you add one event listener to a parent element to handle events for multiple child elements.

                Useful :
                        a. Better performance.
                        b. Works with dynamically added element.
                        c. Cleaner code.

        #5. What is the difference between preventDefault() and stopPropagation() methods?
        Answer : 
                preventDefault() : stops the browsers default behavior.

                stopPropagation() : Stops event bubbling.