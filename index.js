*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

body {
    height: 100vh;
    width: 100%;
    font-family: system-ui;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #9F12A4;
    background: -moz-linear-gradient(-45deg, #9F12A4 0%, #5C0000 100%);
    background: -webkit-linear-gradient(-45deg, #9F12A4 0%, #5C0000 100%);
    background: linear-gradient(135deg, #9F12A4 0%, #5C0000 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
}

.newtask{
    background-color: white;
    border-radius: 3px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.25);
}

.newtask input {
    width: 60vw;
    height: 40px;
    border-radius: 3px;
    font-size: 1.125rem;
    margin: 30px 5px;
    padding: 5px;
}

.newtask button {
    width: 18vw;
    height: 40px;
    border: none;
    border-radius: 3px;
    font-size: 1.125rem;
    margin: 30px 5px;
    background-color: #5C0000;
    color: white;
    cursor: pointer;
    transition: 0.2s;
}

.newtask button:hover {
    background-color: #9F12A4;
}

.tasks {
    background-color: white;
    border-radius: 3px;
    padding: 35px;
    margin-top: 30px;
    -webkit-box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.25);
}

.task{
    height: 40px;
    padding: 25px 10px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #d1d3d4;
}

.task span{
    font-size: 1.125rem;
    font-weight: 400;
    cursor: pointer;
}

.task button{
    width: 12vw;
    height: 35px;
    border: none;
    border-radius: 3px;
    margin: 30px 5px;
    background-color: #5C0000;
    font-size: 1.125em;
    color: white;
    font-weight: 900;
    cursor: pointer;
    transition: 0.2s;
}

.task button:hover {
    background-color: #9F12A4;
}

.completed {
    text-decoration: line-through;
}
