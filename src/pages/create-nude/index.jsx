import CreateNudeContainer from "./CreateNudeContainer";
import CreateNudeComponent from "./CreateNudeComponent";

 const CreateNude = (injectedProps) => {
  return (
    <CreateNudeContainer  {...injectedProps}>
      {(props) => (
        <CreateNudeComponent {...props} {...injectedProps}/>
      )}
    </CreateNudeContainer>
  )
}

export default CreateNude
