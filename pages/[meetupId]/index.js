import Layout from "../../components/layout/Layout";
import  MeetupDetail  from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Layout>
      <MeetupDetail
        image={props.image}
        title={props.title}
      />
    </Layout>
  );
}
export async function getStaticPaths(){
    return{
        fallback:true,
        paths:[{
            params:{
                meetupId:"m1"
            }
        },
        {
            params:{
                meetupId:"m2"
            }
        }]
    }
}
export async function getStaticProps(context){
    const meetupId=context.params.meetupId;
    console.log(meetupId);
    //fetch data from api
    return {
        props:{
            meetupData:{
                image:"https://cdn.theatlantic.com/thumbor/t_SUTY6eiMNjB5_jOvdz8Cv0mFA=/0x0:1920x1080/976x549/media/img/mt/2015/05/man/original.jpg",
                title:"A first meetup",
            }
        },
        revalidate:1
    }
}
export default MeetupDetails;
