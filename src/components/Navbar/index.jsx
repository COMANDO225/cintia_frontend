import {
	Text,
	Avatar,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	Button,
	Portal,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assets/img/tecvoc-removebg.png";

import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
} from "@chakra-ui/react";

const Navbar = ({ user }) => {
	const navigate = useNavigate();

	const cerrarSession = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};

	const { nombre, correo } = user;

	// extraer primer nombre del nombre completo
	const primerNombre = nombre.split(" ")[0];

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<nav className='nav'>
			<div className='nav_wrapper'>
				<div className='marca' onClick={onOpen}>
					<div className='imagen_container'>
						<img src={logoImage} alt='logo de tecvoc' />
					</div>
					<Text as={"b"} fontSize={"xl"}>
						Tecvoc
					</Text>
				</div>
				<Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
					{/* es el fondo borrso */}
					<DrawerOverlay />
					<DrawerContent>
						<DrawerHeader borderBottomWidth='1px'>
							<div className='marca' onClick={onClose}>
								<div className='imagen_container'>
									<img src={logoImage} alt='logo de tecvoc' />
								</div>
								<Text as={"b"} fontSize={"xl"}>
									Tecvoc
								</Text>
							</div>
						</DrawerHeader>
						<DrawerBody>
							<p>Some contents...</p>
							<p>Some contents...</p>
							<p>Some contents...</p>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
				<Popover
				// placement='bottom-end'
				>
					<PopoverTrigger>
						<Button
							variant='ghost'
							borderRadius={"full"}
							padding={0}
							size={"sm"}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
									paddingLeft: "1rem",
								}}
							>
								{primerNombre}
								<Avatar size={"sm"} name={nombre} />
							</div>
						</Button>
					</PopoverTrigger>
					<Portal>
						<PopoverContent
							marginRight={"1rem"}
							maxWidth={"240px"}
							boxShadow={"xl"}
						>
							<PopoverBody>
								<div className='user_panel'>
									<div className='user_panel__avatar'>
										<Avatar size={"xl"} name={nombre} />
									</div>
									<div className='user_panel__info'>
										<Text fontSize={"lg"} as={"b"}>
											{nombre}
										</Text>
										<Text fontSize={"sm"}>{correo}</Text>
									</div>
									<div className='user_panel_logout'>
										<Button
											colorScheme='red'
											width={"full"}
											onClick={cerrarSession}
										>
											Cerrar sesión
										</Button>
									</div>
								</div>
							</PopoverBody>
						</PopoverContent>
					</Portal>
				</Popover>
			</div>
		</nav>
	);
};

export default Navbar;
