const $ = document.querySelector.bind(document);

const btnServerTitles = document.querySelectorAll('.service-milk-tea__title')



var htmls = `
            <div class="row">
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>
            <div class="col l-2 m-4 c-6">
                <div class="service-milk-tea__sp-list">
                    <div class="service-milk-tea__sp-item">
                        <img src="/asset/img/lycaphe2.jpg" alt="" class="milk-tea__sp-item-ima">
                        <h5 class="service-milk-tea__sp-item-pri">49.000 đ</h5>
                        <div class="layer-overlaps layer-overlaps1"></div>
                        <div class="layer-overlaps layer-overlaps2"></div>
                    </div>
                </div>
                
            </div>

            </div>
            </div> 
`

btnServerTitles.forEach(btnServerTitle => {
    btnServerTitle.onclick = function (e) {
        var btnServerTitleActive = document.querySelector('.service-milk-tea__title.active')
        btnServerTitleActive.classList.remove('active');
        e.target.classList.add('active');
        console.log(document.querySelector('.service-milk-tea__sp'))
        document.querySelector('.service-milk-tea__sp').innerHTML = htmls
    }
})
