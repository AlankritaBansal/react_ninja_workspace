import React, {useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Cards from "../components/card"

const useStyles = makeStyles((theme) => ({
    burger:{
        gridArea: "burger",
        margin: "0 20px 0 0",
        padding: "10px",
        alignSelf: "start",
        fontSize: "40px",
        border: "none",
        background: "none",
        outline: "none",
    },
    container:{
        marginTop:"8vh",
    },
  }));
export default function Home() {
    const classes = useStyles();
    const[isUserLoggedIn, setUserLogin]= React.useState(false);
    const [values, setValues] = React.useState({
        page: '',
        per_page: '',
        total:'',
        total_pages:''
      });
      const [usersList, setUsersList] = React.useState([]);
      var fetchedPage = 1;

    useEffect(() => {
        var tokenFromLocal = localStorage.getItem("token");
        if (tokenFromLocal !== null){
            setUserLogin(true);
            fetchPageContent();
        }
        else {
            setUserLogin(false);
        }
    }, [])

    async function fetchPageContent() {
        var usersListURL = "https://reqres.in/api/users?page="+fetchedPage;
        try{
            const res = await axios.get(usersListURL, 
                {mode: 'no-cors'});
            let resp = res.data;
            setValues({
                page: resp.page,
                per_page: resp.per_page,
                total:resp.total,
                total_pages:resp.total_pages,
             });
             populateUsers(resp.data);
        }
        catch(error){
            alert('some error occured');
        }
    }

    const populateUsers = (resp) => {
        let tempArr = [];
        resp.map(val => tempArr.push(val));
        setUsersList(tempArr);
        // console.log(tempArr);
        // console.log(usersList);
        
    }
    
    return (
        <React.Fragment>
            
            <header className="App-header">
            <button className={classes.burger}>
                🍔
            </button>
            </header>

            {!isUserLoggedIn?(
                <Container className={classes.container} >
                     Please login first
                </Container>
            ):(
                <Container className={classes.container} >
                    {usersList.length > 0 ? (
                       <React.Fragment>
                            {/* multiple cards */}
                            {usersList.map(ptr => {
                                return (
                                     <Cards avatar={ptr.avatar} firstName={ptr.first_name} lastName={ptr.last_name} email={ptr.email}/>
                                );
                            })}       
                       </React.Fragment>
                    ) : (<div>Sorry! No data found</div>)}
                </Container>
            )}
        </React.Fragment>
    )
}
