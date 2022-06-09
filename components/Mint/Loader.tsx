import { Button, Grid, Loading } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";



export default function Loader() {
  const [open, setOpen] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setOpen(true), 10000);
      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );

  return (
    <div>
             {!open ? (
               <Grid.Container gap={1} justify="center">
               <Grid>
                <img src="./QRLoading.gif"></img>
                 <h3>Connection to ipfs..</h3>
               </Grid>
               </Grid.Container>
          
      ) : (
        <>
        <Grid.Container gap={1} justify="center">
               <Grid>
         <img src="./frame.png" width="200px"></img><br></br>
         <p>To check QR status click {""}<a href="/submit">here</a></p>
               </Grid>
               </Grid.Container>
        </>
      )}
    </div>
  );
}


