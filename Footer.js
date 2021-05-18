import React from 'react'

export const Footer = () => {

    const mystyle = {
        position : "relative",
        top : "80vh",
        width :" 100%",
        border : "3px solid blue"

    };
    return (
        <div className="bg-dark text-light" style={mystyle}>
            <p className="text-center" > Copyright &copy; MyTodosList.com</p>

                        
        </div>
    )
}
