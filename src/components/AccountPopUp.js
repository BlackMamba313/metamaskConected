import {Box, Button, Modal, Typography} from "@mui/material";
import {useEtherBalance, useEthers} from "@usedapp/core";
import Identification from "./Identification";
import {formatEther} from "@ethersproject/units";

const AccountPopUp = ({onClose, open}) => {

    const { account, deactivate } = useEthers();
    const etherBalance = useEtherBalance(account);

    function handleDeactivateAccount() {
        deactivate();
        onClose();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        background: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Account
                </Typography>
                <Identification />
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {account &&
                        `${account.slice(0, 6)}...${account.slice(
                            account.length - 4,
                            account.length
                        )}`}
                </Typography>
                <Typography  variant='h5'>
                    {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
                </Typography>
                <Button
                    variant="link"
                    href={`https://ropsten.etherscan.io/address/${account}`}
                >
                    Copy Address
                </Button>
                <Button variant="outline" onClick={handleDeactivateAccount}>
                    Change
                </Button>
            </Box>
        </Modal>
    );
}

export default AccountPopUp;