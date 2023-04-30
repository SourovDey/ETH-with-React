
let cardOne = {
    mainImg : "https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg",
    mainImgAlt : "main img One",
    ethNumber : "Equilibrium #3429",
    ethContent : "Our Equilibrium collection promotes balance and calm.",
    ethCoinImg : "https://i.postimg.cc/T1F1K0bW/Ethereum.png",
    ethCoinImgAlt : "ETH Img",
    eth : "0.041 ETH",
    clockImg : "https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png",
    clockAlt : "clcok",
    days : "3 days left",
    profile : "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/326949446_1248092442732782_2140776626656345958_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0FeS9rvXit1QruB3rQlEEk0w59WU5X8GTTDn1ZTlfwSBXsviVlZvgnYSqqWzF5XUZlDXpUJBMlMjwPvwZ8QC1&_nc_ohc=AVkuhtzhHhIAX-nj3h7&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfDihL5aOiKvK1VVuVyJBATDpf6OzvRJ0gO4_dZUlpg_RQ&oe=64535884",
    profileAlt : "Me",
    creatorName : "Sourov Dey"
}

let cardtwo = {
    mainImg : "https://picsum.photos/seed/picsum/300/300",
    mainImgAlt : "main img two",
    ethNumber : "Equilibrium #3430",
    ethContent : "Our Equilibrium collection promotes balance and calm.",
    ethCoinImg : "https://i.postimg.cc/T1F1K0bW/Ethereum.png",
    ethCoinImgAlt : "ETH Img",
    eth : "0.055 ETH",
    clockImg : "https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png",
    clockAlt : "clcok",
    days : "4 days left",
    profile : "https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/330348701_1334694227094643_6118303661166077577_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEVWf7skA1LqcMw5biya3SYfjkFo6mhVJB-OQWjqaFUkDWHoGQ91Si2ZFS60OsR82TtQ1knbcm_LsjupH62ieQz&_nc_ohc=ge-899ioeLEAX80L9I4&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfBKfufQuHCnt88_OrZxRfL2TyL0SvHId7OaqpLQPe5Sow&oe=645495FE",
    profileAlt : "Me",
    creatorName : "Pappu Dey"
}


let cardthree = {
    mainImg : "https://picsum.photos/id/126/300/300",
    mainImgAlt : "main img three",
    ethNumber : "Equilibrium #3441",
    ethContent : "Our Equilibrium collection promotes balance and calm.",
    ethCoinImg : "https://i.postimg.cc/T1F1K0bW/Ethereum.png",
    ethCoinImgAlt : "ETH Img",
    eth : "0.070 ETH",
    clockImg : "https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png",
    clockAlt : "clcok",
    days : "10 days left",
    profile : "https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/313191090_1420582145134207_9131809230154219243_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEXVgipOE3vIzij-RvUqC8aw82hOhYu7wrDzaE6Fi7vClsLYJ7Hz99mCyvTIeohkekn6yZbhFe6M2PRsaSfrKVI&_nc_ohc=qDeJEYt0L0wAX9OMDej&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfBf208W1twh6SYAzT980gpy9Z1pakt0oQAEc9fmYH-lFw&oe=6453CBC0",
    profileAlt : "Me",
    creatorName : "Sawrna"
}



let myapp = () =>{
    return(
        <>
        <div className="eth-heading" ><img src={cardOne.ethCoinImg} alt={cardOne.ethCoinImgAlt} className=""/>Ethereum(ETH)</div>
        <div className = "ourCard">
        <div className="card-container">
                <a className="hero-image-container">
                    <img className="hero-image" src={cardOne.mainImg} alt={cardOne.mainImgAlt}/>
                </a>
                <main className="main-content">
                    <h1><a href="#">{cardOne.ethNumber}</a></h1>
                    <p>{cardOne.ethContent}</p>
                    <div className="flex-row">
                    <div className="coin-base">
                        <img src={cardOne.ethCoinImg} alt={cardOne.ethCoinImgAlt} className="small-image"/>
                        <h2>{cardOne.eth}</h2>
                    </div>
                    <div className="time-left">
                        <img src={cardOne.clockImg} alt={cardOne.clockAlt} className="small-image"/>
                        <p>{cardOne.days}</p>
                    </div>
                    </div>
                </main>
                <div className="card-attribute">
                    <img src={cardOne.profile} alt={cardOne.profileAlt} className="small-avatar"/>
                    <p>Creation of <span><a href="#">{cardOne.creatorName}</a></span></p>
                </div>
        </div>




        <div className="card-container">
                <a className="hero-image-container">
                    <img className="hero-image" src={cardtwo.mainImg} alt={cardtwo.mainImgAlt}/>
                </a>
                <main className="main-content">
                    <h1><a href="#">{cardtwo.ethNumber}</a></h1>
                    <p>{cardOne.ethContent}</p>
                    <div className="flex-row">
                    <div className="coin-base">
                        <img src={cardOne.ethCoinImg} alt={cardOne.ethCoinImgAlt} className="small-image"/>
                        <h2>{cardtwo.eth}</h2>
                    </div>
                    <div className="time-left">
                        <img src={cardOne.clockImg} alt={cardOne.clockAlt} className="small-image"/>
                        <p>{cardtwo.days}</p>
                    </div>
                    </div>
                </main>
                <div className="card-attribute">
                    <img src={cardtwo.profile} alt={cardOne.profileAlt} className="small-avatar"/>
                    <p>Creation of <span><a href="#">{cardtwo.creatorName}</a></span></p>
                </div>
        </div>


        <div className="card-container">
                <a className="hero-image-container">
                    <img className="hero-image" src={cardthree.mainImg} alt={cardthree.mainImgAlt}/>
                </a>
                <main className="main-content">
                    <h1><a href="#">{cardthree.ethNumber}</a></h1>
                    <p>{cardOne.ethContent}</p>
                    <div className="flex-row">
                    <div className="coin-base">
                        <img src={cardOne.ethCoinImg} alt={cardOne.ethCoinImgAlt} className="small-image"/>
                        <h2>{cardthree.eth}</h2>
                    </div>
                    <div className="time-left">
                        <img src={cardOne.clockImg} alt={cardOne.clockAlt} className="small-image"/>
                        <p>{cardthree.days}</p>
                    </div>
                    </div>
                </main>
                <div className="card-attribute">
                    <img src={cardthree.profile} alt={cardOne.profileAlt} className="small-avatar"/>
                    <p>Creation of <span><a href="#">{cardthree.creatorName}</a></span></p>
                </div>
        </div>
  </div>
        
        
        </>
    
    )
}


export default myapp;
