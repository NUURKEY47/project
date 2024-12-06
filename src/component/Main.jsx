import React from "react"
import FamilyList from "./FamilyList";
import Member from "./Member"

export default function Main() {
  
    const [familyMembers, setFamilyMembers] = React.useState([
        "nuurkey", "deva", "abdikadir", "haska", "fatush"])

        const[getMember, setGetMember]= React.useState(false);
    
    
        function toggleMemberVisibility() {
            setGetMember(prevShown => !prevShown)
        }
    
   function addFamilyMembers(formData) {
        const newMember = formData.get("member")
        setFamilyMembers(prevIngredients => [...prevIngredients, newMember])
    }

    return (
        <main>
            <form action={addFamilyMembers} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. nuurkey"
                    aria-label="Add member"
                    name="member"
                />
                <button>Add Member</button>
            </form>
            {familyMembers.length > 0 &&
          <FamilyList  familyMembers={familyMembers}  toggleMemberVisibility={toggleMemberVisibility}/>
            }
           { getMember && 
           <Member />
           }
        </main>
    )
}

