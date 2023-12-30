const MyBookings = ({trip}) => {
    const { user, token } = isAuthenticated();
    const [bookings, setBookings] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [values, setValues] = useState({
      userReason: "",
      createdData: "",
    });
  
    // const [trip, setTrip] = useState(null)

    const preload = () => {
        getAllBookings(user._id, token).then((data) => {
          console.log(data, "YY")
        if (data.err) {
          console.log(data.err);
        } else {
            setBookings(data);
        }
      });
    };
  
    useEffect(() => {
      preload();
    }, []);

    const {userReason, createdData} = values

    const handleClose = () => {
      setShowModal(false);
      // setSelectedBooking(null);
    };

    const handleOpen = () => {
      setShowModal(true);
      // Additional logic for modal open if needed
    }

    const handleBookNow = (trip) => {

      console.log('Trip object before opening modal:', trip);
      // Logic for handling the booking (can be left empty for now)
      // ...
      // setCurrentTrip(trip);
      console.log("Book button clicked");
      // Open the modal when the user clicks "Book"
      handleOpen();
    };

    const onClick = (event) => {
      event.preventDefault();
        cancellation(user._id, token, values)
          .then((data) => {
            console.log(data, "PP");
            if (data.err) {
              console.log(data.err);
            } else {
              setValues({
                ...values,
                userReason: "",
                createdData: "",
              });
              handleClose(); // Close the modal after successful cancellation
            }
          })
          .catch((err) => {
            console.log(err);
          });
      
    };

    return (
      <Base
        title="Manage Bookings"
        description="Welcome to product management section"
        className="container"
      >
        <table className="table table-dark table-borderless table-hover">
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>
                  <div>
                    <strong>Trip Name:</strong> {booking.tripName}
                  </div>
                  <div>
                    <strong>Destination A:</strong> {booking.tripDestinationA}
                  </div>
                  <div>
                    <strong>Destination B:</strong> {booking.tripDestinationB}
                  </div>
                  <div>
                    <strong>Start Time:</strong> {booking.StartTime}
                  </div>
                  <div>
                    <strong>End Time:</strong> {booking.EndTime}
                  </div>
                </td>
                <td className="text-center">
                  <i
                    className="fas fa-trash fas-125"
                    onClick={() => {
                      handleOpen()
                      handleBookNow(trip);
                      // setTrip(booking); // Set the selected booking
                      setValues({ userReason: '' }); // Clear userReason when modal opens
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal markup */}
      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cancellation</h5>
              <button type="button" className="close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="userReason">Reason for Cancellation:</label>
                <textarea
                  id="userReason"
                  name="userReason"
                  className="form-control"
                  value={values.userReason}
                  onChange={(e) => setValues({ userReason: e.target.value })}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClick}>
                Confirm Cancellation
              </button>
            </div>
          </div>
        </div>
      </div>
      </Base>
    );
} 


// cancelation with rendering 
// const MyBookings = ({trip}) => {
//   const { user, token } = isAuthenticated();
//   const [bookings, setBookings] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const preload = () => {
//       getAllBookings(user._id, token).then((data) => {
//         console.log(data, "YY")
//       if (data.err) {
//         console.log(data.err);
//       } else {
//           setBookings(data);
//       }
//     });
//   };

//   useEffect(() => {
//     preload();
//   }, []);


//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const openModal = () => {
//     setShowModal(true);
//     // Additional logic for modal open if needed
//   }

//   const handleBookNow = (trip) => {

//     console.log('Trip object before opening modal:', trip);
  
//     console.log("Book button clicked");
    
//     openModal();
//   };

  // const onClick = (event) => {
  //   event.preventDefault();
  //     cancellation(user._id, token, values)
  //       .then((data) => {
  //         console.log(data, "PP");
  //         if (data.err) {
  //           console.log(data.err);
  //         } else {
  //           setValues({
  //             ...values,
  //             userReason: "",
  //             createdData: "",
  //           });
  //           handleClose(); // Close the modal after successful cancellation
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
    
  // };

  // return (
  //   <Base
  //     title="Manage Bookings"
  //     description="Welcome to product management section"
  //     className="container"
  //   >
  //     <table className="table table-dark table-borderless table-hover">
  //       <tbody>
  //         {bookings.map((booking, index) => (
  //           <tr key={index}>
  //             <td>
  //               <div>
  //                 <strong>Trip Name:</strong> {booking.tripName}
  //               </div>
  //               <div>
  //                 <strong>Destination A:</strong> {booking.tripDestinationA}
  //               </div>
  //               <div>
  //                 <strong>Destination B:</strong> {booking.tripDestinationB}
  //               </div>
  //               <div>
  //                 <strong>Start Time:</strong> {booking.StartTime}
  //               </div>
  //               <div>
  //                 <strong>End Time:</strong> {booking.EndTime}
  //               </div>
  //             </td>
  //             <td className="text-center">
  //               {/* <i
  //                 className="fas fa-trash fas-125"
  //                 onClick={() => {
  //                   handleOpen()
  //                   handleBookNow(trip);
  //                   // setTrip(booking); // Set the selected booking
  //                   setValues({ userReason: '' }); // Clear userReason when modal opens
  //                 }}
  //               ></i> */}
  //                <button href="#" className="btn btn-success" onClick={() => handleBookNow(trip)}>
  //                       Cancel
  //             </button>
  //                 {/* Modal */}
  //                  {showModal && <Cancellation showModal={showModal} handleClose={closeModal} trip={trip} />}

  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>

      {/* Modal markup
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cancellation</h5>
            <button type="button" className="close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="userReason">Reason for Cancellation:</label>
              <textarea
                id="userReason"
                name="userReason"
                className="form-control"
                value={values.userReason}
                onChange={(e) => setValues({ userReason: e.target.value })}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClick}>
              Confirm Cancellation
            </button>
          </div>
        </div>
      </div>
    </div> */}
//     </Base>
//   );
// } 
