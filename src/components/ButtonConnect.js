import {Box, Button, Typography} from "@mui/material";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identification from "./Identification";

const ButtonConnect = ({onClick}) => {
    const { activateBrowserWallet, account, chainId } = useEthers();
    const userBalance = useEtherBalance(account, { chainId })

    function handleConnectWallet() {
        activateBrowserWallet();
    }

    return account ? (
        <Box
            sx={{display:"flex",
                alignItems:"center",
                background:"#f6f604",
                borderRadius: '10px'
            }}
        >
            <Box sx={{background:"#d94404", p:"5px", borderRadius: '10px'}}>
                <Typography  variant='h5'>
                    {userBalance && parseFloat(formatEther(userBalance)).toFixed(3)} ETH
                </Typography>
            </Box>
            <Button
                onClick={onClick}
                sx={{
                    border:"1px solid transparent",
                    borderRadius: '10px',
                    m:"1px",
                    height:"38px"}}
            >
                <Typography variant='h5' >
                    {account &&
                        `${account.slice(0, 6)}...${account.slice(
                            account.length - 4,
                            account.length
                        )}`}
                </Typography>
                <Identification />
            </Button>
        </Box>
    ) : (
        <Button
            onClick={handleConnectWallet}
            sx={{bg:"gray.800",
                border:"1px solid transparent",
                borderRadius: '10px',
                m:"1px",
                background:'#fcf109',
                height:"38px"}}
        >
            Connect to a wallet
        </Button>
    );
}

export default ButtonConnect;