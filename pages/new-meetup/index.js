import Layout from "../../components/layout/Layout";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(enterMeetupData) {
    console.log(enterMeetupData);
  }
  return (
    <Layout>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Layout>
  );
}
export default NewMeetupPage;
