const Tickets = () => {
    return(
    <div className="tickets">
        <div className="ticket-box">
        <form className="buy-ticket">
            <h2>5 DAY GENERAL ADMITION</h2>
            <p>General admition passes allow access and re-entry to all general admission festival events</p>
            <input  
            placeholder="Your Name"
            type="text">
            </input>
            <input  
            placeholder="Your Email"
            type="text">
            </input>
            <input  
            placeholder="Your Phone Number"
            type="number">
            </input>
            <input  
            placeholder="Billing info"
            type="text">
            </input>
        </form>
        </div>
        <div className="ticket-box">
        <button>Buy Now</button>
        </div>

        <div className="ticket-box">
        <form className="buy-ticket">
            <h2>5 DAY VIP</h2>
            <p>VIP passes allow access and re-entry to all general admission festival events and all other benifits including front of the line accsess, VIP room access, and exclusive bars</p>
            <input  
            placeholder="Your Name"
            type="text">
            </input>
            <input  
            placeholder="Your Email"
            type="text">
            </input>
            <input  
            placeholder="Your Phone Number"
            type="number">
            </input>
            <input  
            placeholder="Billing info"
            type="text">
            </input>
        </form>
        </div>
        <div className="ticket-box">
        <button>Buy Now</button>
        </div>
    </div>
    )
}
export default Tickets;