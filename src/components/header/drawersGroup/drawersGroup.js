import { Drawer } from "@/components/drawer/drawer";
import MenuDrawer from "./menuDrawer";
import { DrawerHeader } from "@/components/drawer/drawerHeader";

export default function DrawersGroup() {

    return (
        <>
            <Drawer
                stateKey="search"
                anchor="top"
                sx={{
                    "& .MuiDrawer-paper": {
                        borderBottomLeftRadius: "2rem",
                        borderBottomRightRadius: "2rem",
                    },
                }}
            >
            </Drawer>
            <Drawer stateKey="cart" anchor="right">
                <DrawerHeader stateKey="cart" label="Shopping Cart" />
            </Drawer>
            <Drawer stateKey="user" anchor="right">
                <DrawerHeader stateKey="user" label="Profile" />
            </Drawer>
            <MenuDrawer>
                <DrawerHeader stateKey="menu" label="Menu" />
            </MenuDrawer>
        </>
    );
}