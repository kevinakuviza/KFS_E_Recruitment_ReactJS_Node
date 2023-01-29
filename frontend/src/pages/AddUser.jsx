import React, { useState, useRef } from 'react';
import { makeStyles, Box } from '@material-ui/core';
// import { WorkExperience } from '.';

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
export function WorkExperience() {
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
        <div className={classes.loginpage}>
            <form action="" className="formWrapper">
                <Box className="form_header" textAlign="center" m={2}>
                    <a href="#"> <img src={require('../kfs.png')} alt="" /></a>
                </Box>
                {/* <Box className="btn_wrapper">
                    <div ref={design_show} className={`btn_design_show `}></div>
                    <button type="button" onClick={btnFunc} className="active">E-mail</button>
                    <button type="button" onClick={btnFunc}>API Key</button>
                </Box> */}
                <Box class="form_control">
                    <label htmlFor="">User Full name(s)</label>
                    <input type="email" placeholder="User Full name(s)" />
                </Box>
                <Box class="form_control">
                    <label htmlFor="">Roles</label>
                    <input type="email" placeholder="Roles" />
                </Box>
                <Box class="form_control">
                    <label htmlFor="">Department</label>
                    <input type="email" placeholder="Department" />
                </Box>
                <Box class="form_control">
                    <label htmlFor="">Email Address</label>
                    <input type="email" placeholder="Email Address" />
                </Box>
                <Box class="form_control">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password" />
                </Box>
                {/* <Box class="form_control">
                    <label htmlFor="">Achievements</label>
                    <input type="email" placeholder="Achievements" />
                </Box> */}
                {/* <Box class="form_control">
                    <label htmlFor="">Specialisation</label>
                    <input type="email" placeholder="Specialisation" />
                </Box> */}
                {/* <Box class="form_control">
                    <label htmlFor=""></label>
                    <input type="password" placeholder="Password" />
                </Box> */}
                <Box class="form_control">
                    <button type="submit">Create User</button>
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
        </div>
    )
}
export default WorkExperience;