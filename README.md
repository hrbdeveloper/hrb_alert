# hrb_alert
custom alert Ajax

Call Function : 

hrb_alert([ 
    type,  /*['danger','success','warning','info']*/
    title,   /*Larg Title*/
    text,   /*Description Alert*/
    btn,   /*['ok','okCancel','sendCancel','delCancel','cancel']*/
    TextOkDelSendSubmit, /* content Text for Buttons : ok , delete , send , submit */
    textCancel, /* content Text for Button : Cancel */
    html /* create form Or show pic and All Html Tags */
], 
  hrb_success, /* Function Success Btn */
  hrb_cancel /* Function Cancel Btn */
) 
