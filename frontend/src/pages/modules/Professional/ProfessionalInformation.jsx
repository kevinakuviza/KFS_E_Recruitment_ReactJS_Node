import React, { useState, useRef } from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const useStyles = makeStyles({
    loginpage: {
        minWidth: '100vw',
        minHeight: '100vh',
        fontSize: 'large',
        background: '#00A1B3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .formWrapper': {
            width: '800px',
            background: '#232323',
            boxShadow: '1px 12px 25px 0 #000',
            padding: '1.5rem 1.5rem 5rem 1.5rem',
        },
        '& .btn_wrapper': {
            display: 'inline-flex',
            borderRadius: '30px',
            position: 'relative',
            border: '1px solid rgba(255,255,255,0.1)',
            '& button': {
                border: 'none',
                outline: 'none',
                display: 'inline-block',
                padding: '.4rem 1rem',
                cursor: 'pointer',
                background: 'transparent',
                color: '#fff',
                position: 'relative',
                zIndex: '100',
                fontWeight: 'bold',
                '&.active': {
                    color: '#00A1B3'
                }

            },
            '& .btn_design_show': {
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: '50%',
                borderRadius: '30px',
                background: '#fff',
                transition: '1s all',
            }
        },
        '& .form_control': {
            '& input': {
                display: 'block',
                fontSize: 'large',
                width: '100%',
                padding: '.4rem .4rem',
                background: '#000',
                color: '#ccc',
                border: 'none',
                outline: 'none',
                borderRadius: '.2rem',
                margin: '1.5rem 0',
                '&:hover': {
                    boxShadow: '0 0 16px 1px #00A1B3'
                }
            },
            '& button[type="submit"]': {
                width: '100%',
                padding: '.2rem',
                background: '#B7CA33',
                outline: 'none',
                color: '#fff',
                cursor: 'pointer',
                border: 'none',
                '&:focus': {
                    outline: 'none',
                    border: 'none',
                    textAlign: 'center',
                }
            }
        },
        '& .form_bottom': {
            '& a': {
                textDecoration: 'none',
                color: '#fff'
            }
        }

    }
})
export function ProfessionalInformation() {
    const design_show = useRef('');

    const classes = useStyles();

    const btnFunc = (event) => {
        //console.log(event.currentTarget)
        let btnTarget = event.currentTarget;
        let designTarget = design_show.current

        if (btnTarget.classList.contains('active')) {
            btnTarget.classList.toggle('active')

            if (!designTarget.getAttribute('style')) {
                designTarget.setAttribute('style', `width: 50%; left:50%`)
            } else {
                designTarget.removeAttribute('style');
            }

        } else {
            btnTarget.classList.toggle('active')
            designTarget.setAttribute('style', `width: 50%; left:50%`)
        }

    }


    return (
<<<<<<< HEAD:frontend/src/pages/ProfessionalInformation.jsx
        <React.Fragment>
                <div class="row">
        <div class="col-md-4">
        <div class="form-group">
            <label class="control-label">First Name</label>
            <input type="text" class="form-control @error('sname') is-invalid @enderror" 
            name="sname" placeholder="Enter Sur Name" value="{{ old('sname') }}"/>
         
                <span class="invalid-feedback" role="alert">
                        <strong></strong>
                </span>
          
=======
        <div className={classes.loginpage}>
            <form action="" className="formWrapper">
                <Box className="form_header" textAlign="center" m={2}>
                    <a href="#"> <img src={require('../../../kfs.png')} alt="" /></a>
                </Box>
                {/* <Box className="btn_wrapper">
                    <div ref={design_show} className={`btn_design_show `}></div>
                    <button type="button" onClick={btnFunc} className="active">E-mail</button>
                    <button type="button" onClick={btnFunc}>API Key</button>
                </Box> */}
                <Box class="form_control">
                    <label htmlFor="">Institution Name</label>
                    <input type="email" placeholder="Institution Name" />
                </Box>
                <Box class="form_control">
                    <label htmlFor="">Start Date</label>
                    <input type="email" placeholder="Start Date" />
                </Box>
                <Box class="form_control">
                    <label htmlFor="">End Date</label>
                    <input type="email" placeholder="End Date" />
                </Box>
                <Box class="form_control">
                    <label htmlFor="">Course Name</label>
                    <input type="email" placeholder="Course Name" />
                </Box>
                <Box class="form_control">
                    <label htmlFor="">Specialisation</label>
                    <input type="email" placeholder="Specialisation" />
                </Box>
                {/* <Box class="form_control">
                    <label htmlFor=""></label>
                    <input type="password" placeholder="Password" />
                </Box> */}
                <Box class="form_control">
                    <button type="submit">Create Professional Information</button>
                </Box>
               
                <br />
                <br />
                <hr />
                <Box className="form_bottom" display="flex" justifyContent="space-between">
                    <a href="#">
                        Registration
                    </a>

                    <Box class="form_control">
                    <button type="submit">Click Next to continue filling your profile</button>
                </Box>
                </Box>
            </form>
>>>>>>> a32e4f9826d4afeebfe82e1614c5bfab91279129:frontend/src/pages/modules/Professional/ProfessionalInformation.jsx
        </div>
    </div>
     <div class="col-md-4">
     <div class="form-group">
         <label class="control-label">Sur Name</label>
         <input type="text" class="form-control @error('sname') is-invalid @enderror" 
         name="sname" placeholder="Enter Sur Name" value="{{ old('sname') }}"/>
      
             <span class="invalid-feedback" role="alert">
                     <strong></strong>
             </span>
       
     </div>
 </div>
 <div class="col-md-4">
     <div class="form-group">
         <label class="control-label">Last Name</label>
         <input type="text" class="form-control @error('sname') is-invalid @enderror" 
         name="sname" placeholder="Enter Sur Name" value="{{ old('sname') }}"/>
      
             <span class="invalid-feedback" role="alert">
                     <strong></strong>
             </span>
       
     </div>
 </div>
 <div class="col-md-4">
     <div class="form-group">
         <label class="control-label">Last Name</label>
         <input type="text" class="form-control @error('sname') is-invalid @enderror" 
         name="sname" placeholder="Enter Sur Name" value="{{ old('sname') }}"/>
      
             <span class="invalid-feedback" role="alert">
                     <strong></strong>
             </span>
       
     </div>
 </div>
 <div class="col-md-4">
        <div class="form-group">
            <label class="control-label">First Name</label>
            <input type="text" class="form-control @error('sname') is-invalid @enderror" 
            name="sname" placeholder="Enter Sur Name" value="{{ old('sname') }}"/>
         
                <span class="invalid-feedback" role="alert">
                        <strong></strong>
                </span>
          
        </div>
    </div>
     <div class="col-md-4">
     <div class="form-group">
         <label class="control-label">Sur Name</label>
         <input type="text" class="form-control @error('sname') is-invalid @enderror" 
         name="sname" placeholder="Enter Sur Name" value="{{ old('sname') }}"/>
      
             <span class="invalid-feedback" role="alert">
                     <strong></strong>
             </span>
       
     </div>
 </div>
 <div class="col-md-4">
     <div class="form-group">
         <label class="control-label">Last Name</label>
         <input type="text" class="form-control @error('sname') is-invalid @enderror" 
         name="sname" placeholder="Enter Sur Name" value="{{ old('sname') }}"/>
      
             <span class="invalid-feedback" role="alert">
                     <strong></strong>
             </span>
       
     </div>
 </div>
 <div class="col-md-4">
     <div class="form-group">
         <label class="control-label">Last Name</label>
         <input type="text" class="form-control @error('sname') is-invalid @enderror" 
         name="sname" placeholder="Enter Sur Name"/>
      
             <span class="invalid-feedback" role="alert">
                     <strong></strong>
             </span>
       
     </div>
 </div>
 {/* <div class="form-group">
                                   <button type="submit" class=" d-sm-inline-block btn btn-primary btn-xs  shadow-sm btn-sm" style="background-color:#cb0c9f;color: floralwhite;width: 150px;">

                                    </button>                            
                              </div> */}
 </div>
 </React.Fragment>
    )
}
export default ProfessionalInformation;