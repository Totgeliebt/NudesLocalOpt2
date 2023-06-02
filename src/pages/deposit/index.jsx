import DepositContainer from "./DepositContainer";
import DepositComponent from "./DepositComponent";

const Deposit = (injectedProps) => {
  return (
    <DepositContainer  {...injectedProps}>
      {(props) => (
        <DepositComponent {...props} {...injectedProps}/>
      )}
    </DepositContainer>
  )
}
export  default Deposit
