function Sidebar() {
    return (
    <>
        <div className="topmost">
            <div className="hpc">
                <span>Home</span> / <b>Personal Care</b>
            </div>
            <div className="pci">
                <h4>Personal Care <span>- 98457 items</span></h4>
            </div>
            <div className="filters">
                <h4>Filters</h4>
                <p className="filter">Bundles 
                <i class='bx bx-chevron-down'></i></p>
                <p className="filter">Country of Origin 
                <i class='bx bx-chevron-down'></i></p>
                <p className="filter">Size
                <i class='bx bx-chevron-down'></i></p>

                <div className="recommends">
                <select name="" id="" size="1">
                    <option value="">Sort by : <span>Recommended</span></option>
                    <option value="" className="select">Recommended</option>
                    <option value="" className="select">What's New</option>
                    <option value="" className="select">Popularity</option>
                    <option value="" className="select">Better Discount</option>
                    <option value="" className="select">Price : High to Low</option>
                    <option value="" className="select">Price : Low to High</option>
                    <option value="" className="select">Customer Rating</option>
                </select>
            </div>
            </div>

            
        </div>

        <div className="product">
            <div className="sidebar">
                <div className="genders">
                    <div className="gender"><input type="radio" />&nbsp;&nbsp;Men</div>
                    <div className="gender"><input type="radio" />&nbsp;&nbsp;Women</div>
                    <div className="gender"><input type="radio" />&nbsp;&nbsp;Boys</div>
                    <div className="gender"><input type="radio" />&nbsp;&nbsp;Girls</div>
                </div>
                <div className="categories">
                    <div className="cat">
                        <h4>CATEGORIES</h4>
                        <i class='bx bx-search'></i>
                    </div>
                    <div className="list1"><input type="checkbox" />&nbsp;&nbsp;Lipstick</div>
                    <div className="list1"><input type="checkbox" />&nbsp;&nbsp;Nail Polish</div>
                    <div className="list1"><input type="checkbox" />&nbsp;&nbsp;Perfume</div>
                    <div className="list1"><input type="checkbox" />&nbsp;&nbsp;Massage Oils</div>
                    <div className="list1"><input type="checkbox" />&nbsp;&nbsp;Face Wash and Cleanser</div>
                    <div className="list1"><input type="checkbox" />&nbsp;&nbsp;Bindi</div>
                    <div className="list1"><input type="checkbox" />&nbsp;&nbsp;Makeup Combo</div>
                    <div className="list1"><input type="checkbox" />&nbsp;&nbsp;Serum and Gel</div>
                    <h5>+175 more</h5>
                </div>
                <div className="brands">
                    <div className="brand"><h3>BRAND</h3>
                        <i class='bx bx-search'></i>

                    </div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;Comet Busters</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;MI FASHION</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;NOY</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;PERPAA</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;Deve Herbes</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;ME-ON</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;Menjeweli</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;FORFOR</div>
                    <h5>+1571 more</h5>
            </div>

            <div className="prices">
                    <div className="price"><h3>PRICE</h3>
                    </div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;Rs.32 to Rs.12499</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;Rs.12499 to Rs.24966</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;Rs.24966 to Rs.37433</div>
            </div>

            <div className="colors">
                    <div className="color"><h3>COLOR</h3>
                        <i class='bx bx-search'></i>
                    </div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;
                    <img src="https://www.ledr.com/colours/white.jpg" alt="" />White</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;
                    <img src="https://htmlcolorcodes.com/assets/images/colors/pastel-pink-color-solid-background-1920x1080.png" alt="" />Pink</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;
                    <img src="https://media.istockphoto.com/id/1414159406/vector/multi-colored-abstract-red-orange-green-purple-yellow-colorful-wavy-papercut-overlap-layers.jpg?s=612x612&w=0&k=20&c=i8tKv-pcInFLPrMLoowzECjWJF1M6sQFs6dP5cW7oZM=" alt="" />Multi</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;
                    <img src="https://st2.depositphotos.com/2493575/5398/i/450/depositphotos_53989081-stock-photo-black-texture.jpg" alt="" />Black</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEV2Ry0N4ayPAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC" alt="" />Brown</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Red_Color.jpg/768px-Red_Color.jpg" alt="" />Red</div>
                    <div className="list2"><input type="checkbox" />&nbsp;&nbsp;
                    <img src="https://htmlcolorcodes.com/assets/images/colors/dark-green-color-solid-background-1920x1080.png" alt="" />Green</div>
                    <h5>+39 more</h5>
            </div>
            <div className="discounts">
                    <div className="discount"><h3>DISCOUNT RANGE</h3>
                        <i class='bx bx-search'></i>
                    </div>
                    <div className="list2"><input type="radio" />&nbsp;&nbsp;10% and above</div>
                    <div className="list2"><input type="radio" />&nbsp;&nbsp;20% and above</div>
                    <div className="list2"><input type="radio" />&nbsp;&nbsp;30% and above</div>
                    <div className="list2"><input type="radio" />&nbsp;&nbsp;40% and abovek</div>
                    <div className="list2"><input type="radio" />&nbsp;&nbsp;50% and above</div>
                    <div className="list2"><input type="radio" />&nbsp;&nbsp;60% and above</div>
                    <div className="list2"><input type="radio" />&nbsp;&nbsp;70% and above</div>
                    <div className="list2"><input type="radio" />&nbsp;&nbsp;80% and above</div>
            </div>
            
        
        </div>
                <div className="products">
                    <div className="beautyproducts">
                        <div className="grid1 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15506300/2023/9/19/290c44d1-9d60-49b9-934d-102ffd2e2fb91695125968412-Lakme-Lumi-Skin-Cream-30-g-4181695125968115-1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Lakme</h5>
                                <p className="para">Lumi Skin Cream 30g</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 179</h5>
                                    <p className="buy actualp">Rs.299</p>
                                    <p className="off buy">40% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid2 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/244790/2020/10/10/3487e3ee-e65a-4a23-b954-8f5c9b51a6401602270909325LotusHerbalsSustainableRadiantGoldCellularGlowFacialKit1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Lotus Herbals</h5>
                                <p className="para">Sustainable Whiteglow</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 206</h5>
                                    <p className="buy actualp">Rs.295</p>
                                    <p className="off buy">30% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid3 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11915238/2021/10/11/e97689dd-24fb-4336-bba7-8b1ea7bb302f1633932426722-Philips-Men-BT310115-Series-3000-Beard-Trimmer---White-25616-1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Philips</h5>
                                <p className="para">BT3101/15 Beard Trimmer</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 929</h5>
                                    <p className="buy actualp">Rs.1495</p>
                                    <p className="off buy">Rs.566 OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid4 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10844942/2023/7/3/f85ffa96-53aa-4dbf-a25b-541a197398b51688382106454GarnierColorNaturalsCremeLightBrownHairColor570ml60g1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Garnier</h5>
                                <p className="para">Burgundy Color Naturals 3.16</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 160</h5>
                                    <p className="buy actualp">Rs.200</p>
                                    <p className="off buy">20% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid5 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2505573/2023/9/19/f37eefdc-8a6e-4e53-8216-c5b0569876131695125864026-Parachute-Women-Advansed-Deep-Nourish-Body-Lotion-with-Pure--1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Parachute</h5>
                                <p className="para">Coconut Body Lotion 300ml</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 161</h5>
                                </div>
                            </div>
                        </div>

                        <div className="grid6 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6627274/2020/9/30/7ce8ae9c-0165-46b5-afab-790c5e7ddb001601436950600-Himalaya-Herbals-Unsiex-Intensive-Cocoa-Butter-Moisturizing--1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Himalaya</h5>
                                <p className="para">Cocoa Body Lotion 400ml</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 198</h5>
                                    <p className="buy actualp">Rs.330</p>
                                    <p className="off buy">40% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid7 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5711012/2024/1/3/613048c3-f991-4b17-9183-8ad7238726a01704279838938-LOreal-Paris-Total-Repair-5-Shampoo-180ml-7771704279838601-1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Loreal</h5>
                                <p className="para">Hyaluron Shampoo-180ml</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 219</h5>

                                </div>
                            </div>
                        </div>

                        <div className="grid8 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10848916/2023/8/30/e57e548d-5779-482c-a951-1f1d487329961693397846677-Maybelline-New-York-Washable-Volume-Express-Colossal-Mascara-1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Maybelline</h5>
                                <p className="para">Colossal Mashkara-Deep Black</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 159</h5>
                                    <p className="buy actualp">Rs.199</p>
                                    <p className="off buy">20% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid9 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/365114/2023/12/12/f35fad4d-e1be-4b3b-a2ad-52d76f3bfdfd1702376948273-Dove-Intense-Repair-Hair-Conditioner-For-Damaged-And-Frizzy--1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Dove</h5>
                                <p className="para">Intense Repair Conditioner</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 183</h5>
                                    <p className="buy actualp">Rs.245</p>
                                    <p className="off buy">25% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid10 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1920200/2022/9/23/9e55ca76-4884-4060-a621-8567e145f1dc1663931247959-Lotus-Herbals-Sustainable-WhiteGlow-Skin-Tightening--Brighte-1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Lotus</h5>
                                <p className="para">Sustainable Whiteglow 3 in 1</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 199</h5>
                                    <p className="buy actualp">Rs.285</p>
                                    <p className="off buy">30% OFF</p>
                                </div>
                            </div>
                        </div>


                        <div className="grid1 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15506300/2023/9/19/290c44d1-9d60-49b9-934d-102ffd2e2fb91695125968412-Lakme-Lumi-Skin-Cream-30-g-4181695125968115-1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Lakme</h5>
                                <p className="para">Lumi Skin Cream 30g</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 179</h5>
                                    <p className="buy actualp">Rs.299</p>
                                    <p className="off buy">40% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid2 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/244790/2020/10/10/3487e3ee-e65a-4a23-b954-8f5c9b51a6401602270909325LotusHerbalsSustainableRadiantGoldCellularGlowFacialKit1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Lotus Herbals</h5>
                                <p className="para">Sustainable Whiteglow</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 206</h5>
                                    <p className="buy actualp">Rs.295</p>
                                    <p className="off buy">30% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid3 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11915238/2021/10/11/e97689dd-24fb-4336-bba7-8b1ea7bb302f1633932426722-Philips-Men-BT310115-Series-3000-Beard-Trimmer---White-25616-1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Philips</h5>
                                <p className="para">BT3101/15 Beard Trimmer</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 929</h5>
                                    <p className="buy actualp">Rs.1495</p>
                                    <p className="off buy">Rs.566 OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid4 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10844942/2023/7/3/f85ffa96-53aa-4dbf-a25b-541a197398b51688382106454GarnierColorNaturalsCremeLightBrownHairColor570ml60g1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Garnier</h5>
                                <p className="para">Burgundy Color Naturals 3.16</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 160</h5>
                                    <p className="buy actualp">Rs.200</p>
                                    <p className="off buy">20% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid5 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2505573/2023/9/19/f37eefdc-8a6e-4e53-8216-c5b0569876131695125864026-Parachute-Women-Advansed-Deep-Nourish-Body-Lotion-with-Pure--1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Parachute</h5>
                                <p className="para">Coconut Body Lotion 300ml</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 161</h5>
                                </div>
                            </div>
                        </div>

                        <div className="grid6 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6627274/2020/9/30/7ce8ae9c-0165-46b5-afab-790c5e7ddb001601436950600-Himalaya-Herbals-Unsiex-Intensive-Cocoa-Butter-Moisturizing--1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Himalaya</h5>
                                <p className="para">Cocoa Body Lotion 400ml</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 198</h5>
                                    <p className="buy actualp">Rs.330</p>
                                    <p className="off buy">40% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid7 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5711012/2024/1/3/613048c3-f991-4b17-9183-8ad7238726a01704279838938-LOreal-Paris-Total-Repair-5-Shampoo-180ml-7771704279838601-1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Loreal</h5>
                                <p className="para">Hyaluron Shampoo-180ml</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 219</h5>

                                </div>
                            </div>
                        </div>

                        <div className="grid8 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10848916/2023/8/30/e57e548d-5779-482c-a951-1f1d487329961693397846677-Maybelline-New-York-Washable-Volume-Express-Colossal-Mascara-1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Maybelline</h5>
                                <p className="para">Colossal Mashkara-Deep Black</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 159</h5>
                                    <p className="buy actualp">Rs.199</p>
                                    <p className="off buy">20% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid9 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/365114/2023/12/12/f35fad4d-e1be-4b3b-a2ad-52d76f3bfdfd1702376948273-Dove-Intense-Repair-Hair-Conditioner-For-Damaged-And-Frizzy--1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Dove</h5>
                                <p className="para">Intense Repair Conditioner</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 183</h5>
                                    <p className="buy actualp">Rs.245</p>
                                    <p className="off buy">25% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid10 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1920200/2022/9/23/9e55ca76-4884-4060-a621-8567e145f1dc1663931247959-Lotus-Herbals-Sustainable-WhiteGlow-Skin-Tightening--Brighte-1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Lotus</h5>
                                <p className="para">Sustainable Whiteglow 3 in 1</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 199</h5>
                                    <p className="buy actualp">Rs.285</p>
                                    <p className="off buy">30% OFF</p>
                                </div>
                            </div>
                        </div>


                        <div className="grid1 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15506300/2023/9/19/290c44d1-9d60-49b9-934d-102ffd2e2fb91695125968412-Lakme-Lumi-Skin-Cream-30-g-4181695125968115-1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Lakme</h5>
                                <p className="para">Lumi Skin Cream 30g</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 179</h5>
                                    <p className="buy actualp">Rs.299</p>
                                    <p className="off buy">40% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid2 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/244790/2020/10/10/3487e3ee-e65a-4a23-b954-8f5c9b51a6401602270909325LotusHerbalsSustainableRadiantGoldCellularGlowFacialKit1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Lotus Herbals</h5>
                                <p className="para">Sustainable Whiteglow</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 206</h5>
                                    <p className="buy actualp">Rs.295</p>
                                    <p className="off buy">30% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid3 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11915238/2021/10/11/e97689dd-24fb-4336-bba7-8b1ea7bb302f1633932426722-Philips-Men-BT310115-Series-3000-Beard-Trimmer---White-25616-1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Philips</h5>
                                <p className="para">BT3101/15 Beard Trimmer</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 929</h5>
                                    <p className="buy actualp">Rs.1495</p>
                                    <p className="off buy">Rs.566 OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid4 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10844942/2023/7/3/f85ffa96-53aa-4dbf-a25b-541a197398b51688382106454GarnierColorNaturalsCremeLightBrownHairColor570ml60g1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Garnier</h5>
                                <p className="para">Burgundy Color Naturals 3.16</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 160</h5>
                                    <p className="buy actualp">Rs.200</p>
                                    <p className="off buy">20% OFF</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid5 grids">
                            <div className="images"><img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2505573/2023/9/19/f37eefdc-8a6e-4e53-8216-c5b0569876131695125864026-Parachute-Women-Advansed-Deep-Nourish-Body-Lotion-with-Pure--1.jpg" alt="" /></div>

                            <div><button>Wishlist</button></div>
                            <div className="prodetails">
                                <h5>Parachute</h5>
                                <p className="para">Coconut Body Lotion 300ml</p>
                                <div className="price">
                                    <h5 className="buy">Rs. 161</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="links">
                        <div className="text">
                            <p>Page of </p>
                        </div>
                        <div className="previous">
                            <button className="prebtn"><i class='bx bx-chevron-left'></i>Previous</button>
                        </div>
                        <div className="num">
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#">6</a>
                            <a href="#">7</a>
                            <a href="#">8</a>
                            <a href="#">9</a>
                            <a href="#">10</a>
                        </div>
                        <div className="Next">
                            <button className="nextbtn">Next <i class='bx bx-chevron-right'></i></button>
                        </div>
                    </div>
                </div>
            </div>

            </>

    );
}
export default Sidebar;