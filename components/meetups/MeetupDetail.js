import classes from "./MeetupDetail.module.css";

function MeetupDetail (props){
    return (
          <section className={classes.detail}>
            <img src={props.image}></img>
            <h1>{props.title}</h1>
          </section>
      );
}
export default MeetupDetail;