import { Box, Typography } from "@mui/material";
import { Leaf } from "lucide-react";

export const Header = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingX: '4',
            paddingY: '2',
        }}>
            <Box sx={{
                backgroundColor:'green', 
                display: 'flex', 
                borderRadius:2, 
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 40,
                }}>
                    <Leaf color="white"/>
                </Box>
            <Typography variant="h2" sx={{}}>Teste</Typography>
            
            <Box>Teste</Box>
            <Box>Teste</Box>
        </Box>
    )
}