import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Test from './test.png';
import 'bootstrap/dist/css/bootstrap.css';

class AboutSection extends Component {
    render() {
        return (
            <>
                <section class="p-5">
                    <div class="container">
                        <img align="right" src={Test} alt="Test image for website" />
                        <h2>Amet occaecat vidisse. Elit aut laborum ab fore. Velit an ab quorum mandaremus o
                        nam sed sint multos aute ex id e tractavissent, anim nam arbitror, velit
                        arbitror aliquip te iis cillum doctrina arbitror, si nulla appellat
                        despicationes, deserunt labore nescius. Ad est tempor officia, do magna tamen
                        sint commodo nam e irure occaecat firmissimum in quo de arbitrantur.Se multos et
                        quid. Ullamco irure voluptate cernantur id a a veniam incurreret hic pariatur de
                        voluptate ea de commodo arbitrantur o e quis quid ipsum admodum, irure consequat
                        mandaremus iis constias anim excepteur, singulis magna proident. Cupidatat quis
                        et incurreret cohaerescant, constias hic aute in et admodum coniunctione, in aut
                        nulla esse noster. Hic probant familiaritatem, quo tempor aliquip incididunt a
                        quibusdam fore ad appellat tractavissent non duis vidisse incididunt.</h2>
                    </div>
                </section>
            </>

            /*<>
                    <div class="container">
                        <div class="border border-dark d-flex justify-content-end">
                            <div class="col">
                                <p>test</p>
                            </div>
                            <div class="col">
                                <img class="" src={Test} alt="Test image for website" />
                            </div>
                        </div>
                    </div>
            </>*/

        );
    }
}

function About() {
    return (
        <>
            <p>about page test</p>
        </>
    )
}

export default AboutSection;

/*
<>
    <section class="p-5">
        <div class="container">
            <div class="d-md-flex justify-content-center align-items-center">
                <div class="col-md-8">
                    <h1>Lorem ipsum</h1>
                    <p class="lead my-3">Nisi ita vidisse. Do ad velit ipsum sunt. Ubi export culpa a doctrina. Id et sunt
                    nisi quid de malis ut et minim mandaremus nam e constias eu doctrina iis se
                    fugiat admodum. Fabulas fore do laborum cohaerescant. Velit cohaerescant
                    cernantur quorum occaecat sed in si adipisicing.
                    De noster arbitror domesticarum, a magna eram iis expetendis, commodo velit
                    summis incurreret tamen, minim et constias te aute. Tempor appellat
                    fidelissimae. Ullamco summis aliquip nescius, litteris comprehenderit sed
                    eiusmod, noster occaecat iudicem aut do summis sunt amet senserit.Offendit a
                    noster consequat, se nostrud est mentitum, eu sed velit veniam illum, iudicem in
                    admodum ex export reprehenderit deserunt dolore consequat eu aut export commodo
                    laborum hic ad culpa nostrud iis aute senserit si praesentibus. Cupidatat eram
                    singulis possumus a voluptate elit et cupidatat familiaritatem. Non proident
                    consectetur de mandaremus dolore tempor sed noster.</p>
                </div>
                <div class="text-center">
                    <img class="img-fluid w-50 h-50" src={Test} alt="Test image for website" />
                </div>
            </div>
        </div>
    </section>
</>
*/
