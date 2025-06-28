
const RerenderingComponent = () => {
    // Consume context which triggers rerenders
    return (
        <JustAChillComponent>
            <ExpensiveFunctionComponent />
            <EvenMoreExpensiveComponent />
            <TheMostExpensiveComponentEver />
            <BangaloreRent />
        </JustAChillComponent>
    )
}


export default RerenderingComponent
