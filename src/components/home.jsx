import React, { Component } from 'react';
import castle from '../assets/disney_castle.png'
import '../App.scss';
import FlipCountdown from '@rumess/react-flip-countdown';
import moment from 'moment/moment';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: '2023-11-03 18:00:00',
      innerWidth: window.innerWidth,
    }
  }

  counterSize() {
    const width = this.state.innerWidth;
    const sizes = ['large', 'medium', 'small', 'extra-small']
    if (width >= 1080) {
      return sizes[0];
    } if (width >= 1200) {
      return sizes[1];
    } if (width >= 400) {
      return sizes[2];
    } else {
      return sizes[3];
    }

  }
  render() {
    const { endDate } = this.state
    return (
      <div className="App">
        <section>
          <div className="castle-container ">
            <img className="zoom-animation" src={castle} alt="Castle" />
            <p>
              Paulina
              <br />
              &
              <br />
              Eduardo
            </p>
          </div>
        </section>
        <section className='auto-flex'>
          <div className='card'>
            <p>Estas cordialmente invitado a celebrar nuestra boda</p>
          </div>
          <div className="card">
            <div className="date-presentation">
              <p>Viernes</p>
              <div>
                <p>NOV</p>
                <h6>03</h6>
                <p>2022</p>
              </div>
              <p>8:00 PM</p>
            </div>
          </div>
        </section>
        <section className='auto-flex'>
          <div className='card'>
            <div className='title-image-description'>
              <div>
                <a href="https://goo.gl/maps/nnva6wHn28t4sBaa8">
                  <img src="https://lh3.googleusercontent.com/p/AF1QipN3FVxpYn4NPrOtSqMeN9y2WBRdbe4xmTsrb1xF=s1360-w1360-h1020" alt="Imagen de iglesia" />
                </a>
                <div>
                  <p>Iglesia de santo niño de la salud</p>
                  <p>Lic. Benito Juárez S/N, Mochicahui,<br /> 81257 Los Mochis, Sin.</p>
                  <p className='underline'>6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='title-image-description'>
              <div>
                <a href="https://goo.gl/maps/rt371ZzSwYd68z7T9">
                  <img src="https://scontent.fcul3-1.fna.fbcdn.net/v/t39.30808-6/294104357_531264968730214_4213898863780266269_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHkIQcud61AeuyJEmN_CpxhMI8HJGtfCjYwjwcka18KNnQTleDJ7-5l3jPBn564_eE&_nc_ohc=J-Wx5e55dT0AX-zAUMz&_nc_ht=scontent.fcul3-1.fna&oh=00_AfBE5HpS2WU4QvPBW_iWNPxwsBsE1jhc6ovNU1zzX29zEA&oe=63C7B628" alt="Imagen de iglesia" />
                </a>
                <div>
                  <p><a href="https://goo.gl/maps/rt371ZzSwYd68z7T9"><span class="material-symbols-outlined">
                    location_on
                  </span>Jardin de fiestas La Finca</a></p>
                  <p>Residencial Las Misiones, <br />81293 Los Mochis, Sin.</p>
                  <p className='underline'>8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='auto-flex'>
          <div className='card'>
            <div className='cursive line-spacing-0'>
              <h3>Padres</h3>
              <p>German Eduardo Salazar Quintero</p>
              <p>&</p>
              <p>Sara Marisa Aranda Quintero</p>
              <hr style={{ 'width': '80%' }} />
              <p>Imelda Patricia Humaran Ocampos</p>
              <p>&</p>
              <p>Paul Ibarra Fuentes</p>
            </div>
          </div>
          <div className='card'>
            <div className='cursive line-spacing-0'>
              <h3>Padrinos</h3>
              <p>Kenya Inzunza Aceviz</p>
              <p>&</p>
              <p>Oliver Ibarra Fuentes</p>
              <hr style={{ 'width': '80%' }} />
              <p>Marco Antonio Aranda Quintero</p>
              <p>&</p>
              <p>Selene Sainz</p>
            </div>
          </div>
        </section>
        <section className='auto-flex' >
          <div className='card'>
            <div className='cursive line-spacing-0'>
              <h3>Novios</h3>
              <p>Paulina Ibarra Humaran</p>
              <p>&</p>
              <p>Germán Eduardo Salazar Aranda</p>
            </div>
          </div>
        </section>
        <section className='auto-flex'>
          <div className='card'>
            <ol>
              <li>Hora misa</li>
              <li>Lugar fiesta</li>
              <li>Recepcion</li>
              <li>Cita mamadora</li>
              <li>Cuenta de banco para transferencias</li>
              <li>Nota de regalo en efectivo</li>
              <li>Who's hosting</li>
              <li>The request to come to the wedding</li>
              <li>The names of the couple</li>
              <li>The date and time</li>
              <li>The location</li>
              <li>Reception information</li>
              <li>Dress code</li>
              <li>Separate RSVP card</li>
            </ol>
          </div>
        </section>
        <section>
          <div>
            <FlipCountdown
              size={this.counterSize()}
              monthTitle={'Meses'}
              dayTitle={'Dias'}
              hourTitle={'Horas'}
              minuteTitle={'Minutos'}
              secondTitle={'Segundos'}
              endAtZero
              hideYear
              hideMonth={moment.duration(moment().diff(endDate)).months() === 0}
              hideDay={moment.duration(moment().diff(endDate)).months() === 0 && moment.duration(moment().diff(endDate)).days() === 0}
              endAt={endDate}
            />
          </div>
        </section>
      </div>
    );
  }
}