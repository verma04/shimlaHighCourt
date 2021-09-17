import React, { Component } from 'react';


class BookingsPage extends Component {

  
  state = {
    isLoading: false,
    bookings: [],
    outputType: 'list'
  };



  componentDidMount() {
    this.fetchBookings();
  }
  

  fetchBookings = () => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            bookings {
              _id
             createdAt
             event {
               _id
               title
               date
               price
             }
            }
          }
        `
    };

    fetch('/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTQwODRiZjliN2NhYjQ1ODhlNDhiMzUiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjMxNzgwNDU3LCJleHAiOjYwMDAwMDAwMTYzMTc4MDUwMH0.j_SySdN0u5awmVIFJnJzXh0EfMiyf7uj679z4zCnJw4'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
             console.log('dsdssd')
        }
        return res.json();
      })
      .then(resData => {
        const bookings = resData.data.bookings;
        console.log(bookings)
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  deleteBookingHandler = bookingId => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          mutation CancelBooking($id: ID!) {
            cancelBooking(bookingId: $id) {
            _id
             title
            }
          }
        `,
      variables: {
        id: bookingId
      }
    };

    fetch('/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTQwODRiZjliN2NhYjQ1ODhlNDhiMzUiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjMxNzgwNDU3LCJleHAiOjYwMDAwMDAwMTYzMTc4MDUwMH0.j_SySdN0u5awmVIFJnJzXh0EfMiyf7uj679z4zCnJw4"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        this.setState(prevState => {
          const updatedBookings = prevState.bookings.filter(booking => {
            return booking._id !== bookingId;
          });
          return { bookings: updatedBookings, isLoading: false };
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  changeOutputTypeHandler = outputType => {
    if (outputType === 'list') {
      this.setState({ outputType: 'list' });
    } else {
      this.setState({ outputType: 'chart' });
    }
  };

  render() {

   
    return <React.Fragment>sddssdsd</React.Fragment>;
  }
}


export default BookingsPage
