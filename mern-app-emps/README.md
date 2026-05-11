 - Create HTTP Server
        - Create Employee Schema(
                name,email,mobile,designation & companyName
                ) and model
        - Define REST API routes for
                - Create Employee
                - Read all employees
                - Edit employee
                - Delete Employee


### fetch vs axios
- fetch is a built-in JavaScript function for making HTTP requests, while axios is a popular third-party library that provides additional features and a more user-friendly API for handling HTTP requests in JavaScript applications.
- fetch returns a Promise that resolves to the Response object, while axios returns a Promise that resolves to the response data directly, making it easier to work with the response data without needing to parse it manually.
- axios automatically transforms JSON data, while with fetch you need to call the .json() method on the response to parse it.
- axios has built-in support for request cancellation, while fetch does not have a native way to cancel requests.


### state management 
                Sharing State + keeping state sync acrros app


- prop drilling - passing data from parent to child component via props
  prop drilling is a common issue in React applications where data needs to be passed down through multiple levels of components. This can lead to code that is difficult to maintain and understand, as it requires passing props through components that do not need them.

- Context API - a way to share data across components without prop drilling
    The Context API is a built-in feature of React that allows you to share data across components without having to pass props through every level of the component tree. It provides a way to create a global state that can be accessed by any component in the application.


context API ---> small apps
redux / Zustand --> large apps 
zustand is a alternatve and simpler state management library compared to Redux, it has less boilerplate and insdustry adoption is increasing. 

# context API
        - create context object 
        - create provider component   (imagine it as pipeline)
        -add state to context object   (add water to that pipleine)
        -set this context provider to a parent

# drawback/issues with of the context 
context wit use state hook is a best and simple state manamagemnet mechanism for small applications.
but it creates unnecessary re-rendering issues when multiple state is part of context 
    to overcome this unnecessary re-rendering issue, create mutiple context and make sure each context have a single state.
            when the application size is huge , then maintainace of mutiple context will become an issue . 
            for large applications,advance state manangment tools like redux or zustand can be used 
- redux / Zustand are advanced state managemnet libraries