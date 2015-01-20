define([
    'openlayers',
    'map/resource-layers',
    'map/layer-model'
], function(ol, resourceLayers, LayerModel) {
    var layers = resourceLayers.layers;
    var cityLimitFeature = {
        "type": "Feature",
        "properties": {},
        "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -123.80546, 36.58365 ], [ -113.18315, 36.5919 ], [ -113.17287, 31.47801 ], [ -123.77462, 31.5087 ], [ -123.80546, 36.58365 ] ], [ [ -118.66816, 34.18124 ], [ -118.66815, 34.17675 ], [ -118.65859, 34.17675 ], [ -118.6586, 34.17606 ], [ -118.65919, 34.17574 ], [ -118.6586, 34.17567 ], [ -118.65863, 34.16944 ], [ -118.65426, 34.16943 ], [ -118.65428, 34.16572 ], [ -118.64553, 34.1657 ], [ -118.64555, 34.16199 ], [ -118.64198, 34.16197 ], [ -118.63974, 34.15909 ], [ -118.63987, 34.15882 ], [ -118.63998, 34.15909 ], [ -118.63994, 34.15888 ], [ -118.64027, 34.15868 ], [ -118.64127, 34.15831 ], [ -118.64128, 34.15663 ], [ -118.63848, 34.1576 ], [ -118.63216, 34.15053 ], [ -118.63125, 34.15109 ], [ -118.63026, 34.15038 ], [ -118.63008, 34.14983 ], [ -118.62981, 34.14989 ], [ -118.62899, 34.14727 ], [ -118.61497, 34.14728 ], [ -118.61498, 34.14927 ], [ -118.56475, 34.13017 ], [ -118.5992, 34.07434 ], [ -118.5704, 34.06935 ], [ -118.57011, 34.04712 ], [ -118.56714, 34.04138 ], [ -118.5669, 34.04119 ], [ -118.56731, 34.03796 ], [ -118.5676, 34.03278 ], [ -118.5678, 34.03274 ], [ -118.56871, 34.00001 ], [ -118.56849, 33.99999 ], [ -118.56969, 33.98881 ], [ -118.56639, 33.98808 ], [ -118.56272, 33.98779 ], [ -118.55736, 33.98767 ], [ -118.55134, 33.98249 ], [ -118.52135, 34.02065 ], [ -118.51741, 34.02518 ], [ -118.51608, 34.02626 ], [ -118.51554, 34.02623 ], [ -118.51499, 34.02755 ], [ -118.51264, 34.02993 ], [ -118.5107, 34.03141 ], [ -118.50947, 34.0327 ], [ -118.50867, 34.03298 ], [ -118.5088, 34.03336 ], [ -118.5087, 34.03396 ], [ -118.50769, 34.03627 ], [ -118.50808, 34.0381 ], [ -118.50822, 34.03809 ], [ -118.50826, 34.03835 ], [ -118.50812, 34.03908 ], [ -118.50832, 34.03921 ], [ -118.5081, 34.03913 ], [ -118.50755, 34.04007 ], [ -118.5066, 34.04058 ], [ -118.50458, 34.04129 ], [ -118.50396, 34.04072 ], [ -118.49541, 34.04959 ], [ -118.49486, 34.05035 ], [ -118.49464, 34.05016 ], [ -118.49447, 34.05056 ], [ -118.48377, 34.04143 ], [ -118.48001, 34.04446 ], [ -118.48016, 34.04453 ], [ -118.47974, 34.0447 ], [ -118.47965, 34.04511 ], [ -118.47917, 34.04503 ], [ -118.47902, 34.04569 ], [ -118.47844, 34.04563 ], [ -118.47835, 34.04626 ], [ -118.47728, 34.0467 ], [ -118.47438, 34.04421 ], [ -118.47428, 34.04431 ], [ -118.47372, 34.04404 ], [ -118.47128, 34.04194 ], [ -118.47151, 34.04175 ], [ -118.45918, 34.03133 ], [ -118.45762, 34.03166 ], [ -118.45707, 34.0298 ], [ -118.45306, 34.02804 ], [ -118.45213, 34.02712 ], [ -118.44352, 34.01658 ], [ -118.44661, 34.01493 ], [ -118.44691, 34.01456 ], [ -118.44751, 34.01446 ], [ -118.47992, 33.99735 ], [ -118.48141, 33.99631 ], [ -118.48168, 33.9966 ], [ -118.48756, 33.99294 ], [ -118.50084, 33.98561 ], [ -118.53749, 33.96667 ], [ -118.53347, 33.96179 ], [ -118.52575, 33.9554 ], [ -118.52345, 33.95305 ], [ -118.51814, 33.94526 ], [ -118.5136, 33.93896 ], [ -118.50863, 33.93252 ], [ -118.50648, 33.92805 ], [ -118.50091, 33.91862 ], [ -118.49899, 33.9163 ], [ -118.43733, 33.91651 ], [ -118.4453, 33.92155 ], [ -118.45728, 33.94143 ], [ -118.45703, 33.9583 ], [ -118.45948, 33.9583 ], [ -118.46096, 33.96017 ], [ -118.46022, 33.96044 ], [ -118.46003, 33.96035 ], [ -118.45808, 33.96128 ], [ -118.45752, 33.96058 ], [ -118.45645, 33.96106 ], [ -118.45381, 33.95876 ], [ -118.4526, 33.9571 ], [ -118.45227, 33.95626 ], [ -118.44922, 33.95158 ], [ -118.44872, 33.95063 ], [ -118.44869, 33.95017 ], [ -118.44822, 33.94966 ], [ -118.44672, 33.94692 ], [ -118.4454, 33.94491 ], [ -118.44511, 33.94419 ], [ -118.44385, 33.94218 ], [ -118.443, 33.94033 ], [ -118.44224, 33.94044 ], [ -118.44155, 33.93953 ], [ -118.43586, 33.92816 ], [ -118.43387, 33.92372 ], [ -118.43117, 33.919 ], [ -118.43043, 33.91715 ], [ -118.42988, 33.91674 ], [ -118.42965, 33.91632 ], [ -118.42222, 33.91633 ], [ -118.42222, 33.91996 ], [ -118.42439, 33.91996 ], [ -118.4244, 33.92177 ], [ -118.42657, 33.92177 ], [ -118.42657, 33.92358 ], [ -118.42766, 33.92358 ], [ -118.42767, 33.9272 ], [ -118.42875, 33.9272 ], [ -118.42878, 33.93097 ], [ -118.42542, 33.93135 ], [ -118.40206, 33.93149 ], [ -118.39762, 33.93089 ], [ -118.37887, 33.93092 ], [ -118.37873, 33.93089 ], [ -118.37872, 33.92901 ], [ -118.37715, 33.92911 ], [ -118.36838, 33.92902 ], [ -118.36839, 33.93095 ], [ -118.37003, 33.93093 ], [ -118.37006, 33.95267 ], [ -118.37884, 33.95265 ], [ -118.37883, 33.95748 ], [ -118.37845, 33.95875 ], [ -118.37793, 33.95967 ], [ -118.37709, 33.96062 ], [ -118.37589, 33.96145 ], [ -118.37124, 33.96337 ], [ -118.37162, 33.96685 ], [ -118.37192, 33.96739 ], [ -118.37254, 33.96713 ], [ -118.3729, 33.96761 ], [ -118.37237, 33.96799 ], [ -118.37015, 33.96799 ], [ -118.37011, 33.97661 ], [ -118.37034, 33.98164 ], [ -118.36693, 33.98163 ], [ -118.36673, 33.9819 ], [ -118.36625, 33.98165 ], [ -118.33519, 33.98176 ], [ -118.33521, 33.97269 ], [ -118.33302, 33.9727 ], [ -118.33303, 33.96725 ], [ -118.32648, 33.96727 ], [ -118.32647, 33.97091 ], [ -118.32236, 33.97092 ], [ -118.32232, 33.9708 ], [ -118.32189, 33.9708 ], [ -118.32184, 33.97092 ], [ -118.31775, 33.97092 ], [ -118.31772, 33.94546 ], [ -118.31337, 33.94546 ], [ -118.31339, 33.93821 ], [ -118.30903, 33.93821 ], [ -118.30902, 33.94183 ], [ -118.30519, 33.94185 ], [ -118.30518, 33.94547 ], [ -118.30245, 33.94547 ], [ -118.30245, 33.94999 ], [ -118.30026, 33.95 ], [ -118.30027, 33.95948 ], [ -118.2916, 33.95949 ], [ -118.29164, 33.9382 ], [ -118.2915, 33.92506 ], [ -118.29179, 33.89412 ], [ -118.29053, 33.86641 ], [ -118.29154, 33.86566 ], [ -118.29197, 33.86554 ], [ -118.29807, 33.86555 ], [ -118.29806, 33.86642 ], [ -118.2945, 33.86647 ], [ -118.29436, 33.87052 ], [ -118.29914, 33.87053 ], [ -118.29932, 33.8657 ], [ -118.30915, 33.86561 ], [ -118.30894, 33.81238 ], [ -118.30873, 33.81066 ], [ -118.30825, 33.80901 ], [ -118.3093, 33.8088 ], [ -118.30883, 33.8068 ], [ -118.30868, 33.78947 ], [ -118.30847, 33.78877 ], [ -118.30871, 33.78821 ], [ -118.30871, 33.78222 ], [ -118.30904, 33.78218 ], [ -118.30904, 33.78194 ], [ -118.30992, 33.78195 ], [ -118.30949, 33.77905 ], [ -118.30782, 33.77937 ], [ -118.30643, 33.77496 ], [ -118.30885, 33.77496 ], [ -118.30906, 33.77588 ], [ -118.30875, 33.77362 ], [ -118.30885, 33.77253 ], [ -118.31161, 33.76305 ], [ -118.30903, 33.76268 ], [ -118.30904, 33.76051 ], [ -118.30188, 33.76051 ], [ -118.301, 33.75772 ], [ -118.30909, 33.75773 ], [ -118.30912, 33.75021 ], [ -118.30961, 33.74679 ], [ -118.31111, 33.7468 ], [ -118.3111, 33.74729 ], [ -118.31217, 33.7473 ], [ -118.31218, 33.74681 ], [ -118.31845, 33.74684 ], [ -118.31848, 33.74262 ], [ -118.31961, 33.74263 ], [ -118.32003, 33.74149 ], [ -118.31984, 33.741 ], [ -118.31901, 33.74054 ], [ -118.31888, 33.74032 ], [ -118.31878, 33.7394 ], [ -118.31896, 33.7382 ], [ -118.31882, 33.73779 ], [ -118.3185, 33.73748 ], [ -118.31851, 33.73634 ], [ -118.31892, 33.7366 ], [ -118.32005, 33.73612 ], [ -118.31999, 33.73583 ], [ -118.32037, 33.73577 ], [ -118.3203, 33.73545 ], [ -118.31991, 33.73551 ], [ -118.31874, 33.73518 ], [ -118.31851, 33.73525 ], [ -118.31853, 33.73199 ], [ -118.31982, 33.73199 ], [ -118.32013, 33.73143 ], [ -118.32091, 33.73106 ], [ -118.32101, 33.7294 ], [ -118.32847, 33.72942 ], [ -118.33306, 33.72186 ], [ -118.33149, 33.72104 ], [ -118.33043, 33.72023 ], [ -118.32744, 33.71946 ], [ -118.32557, 33.71866 ], [ -118.32323, 33.7186 ], [ -118.32225, 33.71791 ], [ -118.32208, 33.71758 ], [ -118.32218, 33.71728 ], [ -118.32123, 33.71757 ], [ -118.32074, 33.71739 ], [ -118.32013, 33.71701 ], [ -118.31978, 33.71658 ], [ -118.31993, 33.71598 ], [ -118.31957, 33.71594 ], [ -118.31944, 33.71545 ], [ -118.31925, 33.71527 ], [ -118.31861, 33.71531 ], [ -118.31791, 33.71501 ], [ -118.31768, 33.71453 ], [ -118.31768, 33.7138 ], [ -118.31745, 33.71362 ], [ -118.31707, 33.71358 ], [ -118.31681, 33.71377 ], [ -118.31661, 33.71362 ], [ -118.31647, 33.71399 ], [ -118.31584, 33.71409 ], [ -118.31502, 33.71464 ], [ -118.31436, 33.71451 ], [ -118.31333, 33.71462 ], [ -118.31216, 33.71393 ], [ -118.31133, 33.71379 ], [ -118.31042, 33.71302 ], [ -118.30868, 33.71247 ], [ -118.30775, 33.71197 ], [ -118.30539, 33.71164 ], [ -118.3041, 33.7111 ], [ -118.30306, 33.71093 ], [ -118.30213, 33.7103 ], [ -118.30079, 33.70983 ], [ -118.29821, 33.70972 ], [ -118.29663, 33.70891 ], [ -118.29572, 33.70815 ], [ -118.29529, 33.70739 ], [ -118.29525, 33.70636 ], [ -118.295, 33.70545 ], [ -118.29462, 33.70474 ], [ -118.29416, 33.70455 ], [ -118.29374, 33.70484 ], [ -118.29257, 33.7051 ], [ -118.29152, 33.70522 ], [ -118.29117, 33.70485 ], [ -118.29047, 33.70521 ], [ -118.28866, 33.70535 ], [ -118.2871, 33.7064 ], [ -118.28612, 33.70666 ], [ -118.28572, 33.70745 ], [ -118.28542, 33.70771 ], [ -118.28538, 33.70808 ], [ -118.28483, 33.70868 ], [ -118.28389, 33.70888 ], [ -118.28266, 33.70892 ], [ -118.27978, 33.70856 ], [ -118.27913, 33.70835 ], [ -118.27836, 33.70782 ], [ -118.27798, 33.70727 ], [ -118.27733, 33.70787 ], [ -118.2771, 33.7079 ], [ -118.27016, 33.70423 ], [ -118.26767, 33.70367 ], [ -118.26661, 33.7037 ], [ -118.26578, 33.70386 ], [ -118.25151, 33.70845 ], [ -118.2318, 33.715 ], [ -118.24897, 33.7559 ], [ -118.24077, 33.7583 ], [ -118.24115, 33.75854 ], [ -118.24545, 33.76389 ], [ -118.22067, 33.78254 ], [ -118.22768, 33.78994 ], [ -118.22723, 33.79095 ], [ -118.22697, 33.79086 ], [ -118.2268, 33.79215 ], [ -118.22244, 33.80415 ], [ -118.22244, 33.81245 ], [ -118.22277, 33.81273 ], [ -118.22457, 33.82157 ], [ -118.22458, 33.82438 ], [ -118.22662, 33.82953 ], [ -118.2285, 33.82438 ], [ -118.22807, 33.8242 ], [ -118.22539, 33.81101 ], [ -118.22409, 33.80789 ], [ -118.22394, 33.80622 ], [ -118.22443, 33.80459 ], [ -118.22718, 33.8001 ], [ -118.22945, 33.79367 ], [ -118.23004, 33.79255 ], [ -118.23748, 33.80048 ], [ -118.25844, 33.79944 ], [ -118.25651, 33.80477 ], [ -118.26459, 33.80454 ], [ -118.26462, 33.79912 ], [ -118.283, 33.79824 ], [ -118.28293, 33.79763 ], [ -118.28655, 33.79764 ], [ -118.28674, 33.79782 ], [ -118.29915, 33.7978 ], [ -118.29914, 33.8028 ], [ -118.29964, 33.80281 ], [ -118.29962, 33.80342 ], [ -118.29902, 33.8034 ], [ -118.29834, 33.81305 ], [ -118.29849, 33.81314 ], [ -118.29849, 33.81336 ], [ -118.29926, 33.81365 ], [ -118.29904, 33.82221 ], [ -118.29918, 33.82302 ], [ -118.29921, 33.84632 ], [ -118.28602, 33.84625 ], [ -118.28604, 33.85225 ], [ -118.28527, 33.85225 ], [ -118.28525, 33.85416 ], [ -118.29052, 33.85422 ], [ -118.29052, 33.8587 ], [ -118.28562, 33.86104 ], [ -118.28549, 33.86064 ], [ -118.28521, 33.86048 ], [ -118.28514, 33.86068 ], [ -118.28536, 33.86116 ], [ -118.28155, 33.8628 ], [ -118.28159, 33.87305 ], [ -118.28211, 33.87285 ], [ -118.28228, 33.87413 ], [ -118.2832, 33.89695 ], [ -118.28227, 33.89731 ], [ -118.28209, 33.9232 ], [ -118.28194, 33.92309 ], [ -118.27823, 33.92322 ], [ -118.27822, 33.92251 ], [ -118.27753, 33.92243 ], [ -118.27729, 33.92286 ], [ -118.27733, 33.92328 ], [ -118.27323, 33.92328 ], [ -118.27323, 33.92311 ], [ -118.25359, 33.9231 ], [ -118.25355, 33.9273 ], [ -118.25381, 33.9273 ], [ -118.2538, 33.92818 ], [ -118.25347, 33.92863 ], [ -118.25427, 33.92946 ], [ -118.23998, 33.92952 ], [ -118.23032, 33.929 ], [ -118.2309, 33.93169 ], [ -118.22865, 33.93901 ], [ -118.22984, 33.94473 ], [ -118.23016, 33.94526 ], [ -118.23016, 33.94565 ], [ -118.23482, 33.94557 ], [ -118.23485, 33.94713 ], [ -118.23063, 33.94723 ], [ -118.23062, 33.94828 ], [ -118.23403, 33.94824 ], [ -118.23399, 33.95326 ], [ -118.24422, 33.95326 ], [ -118.24421, 33.95427 ], [ -118.24745, 33.95426 ], [ -118.24748, 33.95336 ], [ -118.24884, 33.95336 ], [ -118.24914, 33.94327 ], [ -118.25364, 33.94328 ], [ -118.25353, 33.95126 ], [ -118.25399, 33.95126 ], [ -118.2541, 33.95103 ], [ -118.25593, 33.95306 ], [ -118.2559, 33.96017 ], [ -118.25639, 33.96017 ], [ -118.25644, 33.9895 ], [ -118.23792, 33.98939 ], [ -118.23954, 34.00805 ], [ -118.23971, 34.01471 ], [ -118.2277, 34.01483 ], [ -118.2275, 34.01528 ], [ -118.22571, 34.01532 ], [ -118.2257, 34.01494 ], [ -118.22369, 34.01494 ], [ -118.2237, 34.01536 ], [ -118.22339, 34.01537 ], [ -118.22323, 34.01494 ], [ -118.21716, 34.01497 ], [ -118.21728, 34.01564 ], [ -118.21542, 34.01498 ], [ -118.21474, 34.01498 ], [ -118.2127, 34.01429 ], [ -118.2127, 34.01499 ], [ -118.20817, 34.01501 ], [ -118.20704, 34.01278 ], [ -118.20534, 34.01282 ], [ -118.20503, 34.01263 ], [ -118.20506, 34.01452 ], [ -118.20161, 34.01375 ], [ -118.19142, 34.01286 ], [ -118.19144, 34.01508 ], [ -118.19222, 34.01508 ], [ -118.19238, 34.03323 ], [ -118.19129, 34.03327 ], [ -118.19127, 34.03361 ], [ -118.19129, 34.03442 ], [ -118.19184, 34.03442 ], [ -118.19184, 34.034 ], [ -118.19238, 34.034 ], [ -118.19263, 34.06176 ], [ -118.1813, 34.06175 ], [ -118.1813, 34.06225 ], [ -118.17908, 34.0623 ], [ -118.17306, 34.06229 ], [ -118.17339, 34.0621 ], [ -118.17332, 34.06198 ], [ -118.17302, 34.06212 ], [ -118.17283, 34.06183 ], [ -118.17139, 34.06229 ], [ -118.16529, 34.0623 ], [ -118.16499, 34.06416 ], [ -118.16452, 34.06564 ], [ -118.16247, 34.06969 ], [ -118.16266, 34.0697 ], [ -118.16266, 34.06986 ], [ -118.16218, 34.07031 ], [ -118.16169, 34.07126 ], [ -118.16175, 34.07207 ], [ -118.16156, 34.07297 ], [ -118.16176, 34.07464 ], [ -118.1605, 34.07513 ], [ -118.16066, 34.09344 ], [ -118.15615, 34.09654 ], [ -118.15546, 34.09752 ], [ -118.15529, 34.09867 ], [ -118.17799, 34.0986 ], [ -118.17799, 34.11032 ], [ -118.17724, 34.11046 ], [ -118.17741, 34.11083 ], [ -118.17702, 34.11093 ], [ -118.17689, 34.11206 ], [ -118.17699, 34.1122 ], [ -118.17563, 34.11263 ], [ -118.17546, 34.11315 ], [ -118.1737, 34.1132 ], [ -118.17276, 34.11363 ], [ -118.16887, 34.11784 ], [ -118.16883, 34.11867 ], [ -118.169, 34.11934 ], [ -118.16889, 34.11992 ], [ -118.16794, 34.12033 ], [ -118.16747, 34.12111 ], [ -118.16804, 34.12311 ], [ -118.16805, 34.12392 ], [ -118.16845, 34.12391 ], [ -118.16759, 34.12497 ], [ -118.16579, 34.12555 ], [ -118.16596, 34.126 ], [ -118.1662, 34.12616 ], [ -118.16722, 34.12588 ], [ -118.1691, 34.12649 ], [ -118.16977, 34.12686 ], [ -118.17043, 34.12693 ], [ -118.1713, 34.12636 ], [ -118.17238, 34.12603 ], [ -118.1728, 34.12477 ], [ -118.17696, 34.12314 ], [ -118.17654, 34.12662 ], [ -118.17779, 34.12683 ], [ -118.17768, 34.12665 ], [ -118.17858, 34.12672 ], [ -118.18019, 34.12642 ], [ -118.1809, 34.12833 ], [ -118.18144, 34.1282 ], [ -118.18134, 34.1295 ], [ -118.18258, 34.12919 ], [ -118.18284, 34.12975 ], [ -118.18282, 34.13121 ], [ -118.1861, 34.13373 ], [ -118.18553, 34.13473 ], [ -118.18521, 34.13607 ], [ -118.18589, 34.13618 ], [ -118.18588, 34.13731 ], [ -118.18552, 34.13734 ], [ -118.18553, 34.13856 ], [ -118.18539, 34.13884 ], [ -118.18568, 34.13887 ], [ -118.18525, 34.13929 ], [ -118.18468, 34.13952 ], [ -118.18324, 34.13962 ], [ -118.18252, 34.14034 ], [ -118.18107, 34.14099 ], [ -118.18071, 34.14081 ], [ -118.18038, 34.14123 ], [ -118.18085, 34.14164 ], [ -118.18116, 34.1422 ], [ -118.18221, 34.14306 ], [ -118.1823, 34.14373 ], [ -118.18456, 34.1454 ], [ -118.18421, 34.14628 ], [ -118.18388, 34.14908 ], [ -118.19819, 34.14905 ], [ -118.19819, 34.15163 ], [ -118.19892, 34.15115 ], [ -118.2027, 34.15063 ], [ -118.20357, 34.14969 ], [ -118.20423, 34.14928 ], [ -118.20543, 34.14743 ], [ -118.20772, 34.14725 ], [ -118.20877, 34.14651 ], [ -118.21097, 34.14622 ], [ -118.21161, 34.14718 ], [ -118.2162, 34.14722 ], [ -118.21679, 34.14753 ], [ -118.21918, 34.14751 ], [ -118.21944, 34.14827 ], [ -118.22199, 34.14886 ], [ -118.22245, 34.14925 ], [ -118.22497, 34.14936 ], [ -118.22623, 34.14979 ], [ -118.22694, 34.14861 ], [ -118.227, 34.14763 ], [ -118.22745, 34.14775 ], [ -118.22808, 34.14672 ], [ -118.2286, 34.14689 ], [ -118.22868, 34.14673 ], [ -118.22824, 34.14645 ], [ -118.22858, 34.14588 ], [ -118.22877, 34.14603 ], [ -118.22878, 34.13907 ], [ -118.22916, 34.13907 ], [ -118.22915, 34.13808 ], [ -118.22788, 34.13808 ], [ -118.22775, 34.1356 ], [ -118.2336, 34.1356 ], [ -118.2336, 34.13451 ], [ -118.23627, 34.1345 ], [ -118.23661, 34.13271 ], [ -118.23602, 34.12883 ], [ -118.23531, 34.1276 ], [ -118.23524, 34.12672 ], [ -118.25286, 34.1243 ], [ -118.25326, 34.12445 ], [ -118.25364, 34.1233 ], [ -118.25113, 34.12095 ], [ -118.25426, 34.11876 ], [ -118.25706, 34.12122 ], [ -118.25883, 34.12302 ], [ -118.26067, 34.12523 ], [ -118.26234, 34.12768 ], [ -118.27561, 34.15326 ], [ -118.27898, 34.1532 ], [ -118.27932, 34.15513 ], [ -118.2805, 34.15633 ], [ -118.28267, 34.15677 ], [ -118.28747, 34.15577 ], [ -118.29154, 34.15578 ], [ -118.2956, 34.1588 ], [ -118.29742, 34.15887 ], [ -118.29848, 34.15791 ], [ -118.29895, 34.1577 ], [ -118.30433, 34.15884 ], [ -118.30725, 34.16096 ], [ -118.30873, 34.16144 ], [ -118.30965, 34.16126 ], [ -118.31032, 34.16076 ], [ -118.31231, 34.15496 ], [ -118.31291, 34.15399 ], [ -118.31582, 34.15445 ], [ -118.31768, 34.15631 ], [ -118.32211, 34.15573 ], [ -118.32572, 34.15325 ], [ -118.32903, 34.15018 ], [ -118.33007, 34.14975 ], [ -118.33103, 34.14832 ], [ -118.33664, 34.14649 ], [ -118.3388, 34.14523 ], [ -118.33999, 34.14559 ], [ -118.34112, 34.14538 ], [ -118.34231, 34.14481 ], [ -118.34517, 34.14275 ], [ -118.3531, 34.16129 ], [ -118.35715, 34.16129 ], [ -118.35716, 34.16491 ], [ -118.35473, 34.16491 ], [ -118.35776, 34.17216 ], [ -118.36115, 34.19465 ], [ -118.37031, 34.19638 ], [ -118.37031, 34.2012 ], [ -118.3622, 34.2013 ], [ -118.36299, 34.20682 ], [ -118.33993, 34.2065 ], [ -118.33981, 34.21119 ], [ -118.33774, 34.21127 ], [ -118.33771, 34.21259 ], [ -118.33603, 34.21431 ], [ -118.33642, 34.21457 ], [ -118.33522, 34.21538 ], [ -118.33455, 34.21562 ], [ -118.33746, 34.22131 ], [ -118.26687, 34.22185 ], [ -118.26673, 34.2408 ], [ -118.26602, 34.24036 ], [ -118.26601, 34.24258 ], [ -118.26604, 34.24777 ], [ -118.26669, 34.24777 ], [ -118.26667, 34.25078 ], [ -118.2653, 34.25026 ], [ -118.26526, 34.25238 ], [ -118.2565, 34.25227 ], [ -118.25669, 34.26719 ], [ -118.2389, 34.26708 ], [ -118.23879, 34.28159 ], [ -118.27354, 34.28166 ], [ -118.27368, 34.27807 ], [ -118.28669, 34.27834 ], [ -118.28629, 34.29265 ], [ -118.29062, 34.29272 ], [ -118.29061, 34.29323 ], [ -118.2994, 34.29326 ], [ -118.29948, 34.2861 ], [ -118.32691, 34.28606 ], [ -118.32683, 34.28243 ], [ -118.35173, 34.28247 ], [ -118.35174, 34.27883 ], [ -118.35471, 34.27885 ], [ -118.36052, 34.27996 ], [ -118.36131, 34.27973 ], [ -118.36428, 34.28077 ], [ -118.36728, 34.28059 ], [ -118.36741, 34.28037 ], [ -118.3681, 34.28205 ], [ -118.3689, 34.28326 ], [ -118.36952, 34.28346 ], [ -118.37018, 34.2819 ], [ -118.37135, 34.28234 ], [ -118.37053, 34.28361 ], [ -118.37047, 34.28451 ], [ -118.36984, 34.28613 ], [ -118.37352, 34.28615 ], [ -118.37366, 34.28598 ], [ -118.37352, 34.28317 ], [ -118.37264, 34.28283 ], [ -118.37467, 34.28283 ], [ -118.3748, 34.28366 ], [ -118.3771, 34.28336 ], [ -118.38186, 34.2839 ], [ -118.38576, 34.28482 ], [ -118.38462, 34.28818 ], [ -118.38462, 34.28973 ], [ -118.38692, 34.28973 ], [ -118.38691, 34.29149 ], [ -118.38237, 34.29153 ], [ -118.38237, 34.29333 ], [ -118.38295, 34.29333 ], [ -118.38288, 34.29696 ], [ -118.38739, 34.29696 ], [ -118.3874, 34.29878 ], [ -118.39364, 34.29879 ], [ -118.39371, 34.29698 ], [ -118.39674, 34.29698 ], [ -118.39698, 34.29335 ], [ -118.39981, 34.29342 ], [ -118.40023, 34.29257 ], [ -118.40091, 34.29014 ], [ -118.40082, 34.28845 ], [ -118.40114, 34.28845 ], [ -118.40159, 34.28642 ], [ -118.40617, 34.28593 ], [ -118.4094, 34.28901 ], [ -118.41029, 34.29107 ], [ -118.41035, 34.29197 ], [ -118.41022, 34.29184 ], [ -118.40896, 34.29181 ], [ -118.40907, 34.29366 ], [ -118.40351, 34.29351 ], [ -118.40346, 34.29711 ], [ -118.40121, 34.29707 ], [ -118.40105, 34.30067 ], [ -118.4056, 34.30073 ], [ -118.40547, 34.30791 ], [ -118.40375, 34.30792 ], [ -118.40357, 34.30897 ], [ -118.40411, 34.30904 ], [ -118.40388, 34.31005 ], [ -118.40332, 34.31002 ], [ -118.40302, 34.30939 ], [ -118.40248, 34.30943 ], [ -118.40245, 34.30961 ], [ -118.40184, 34.30988 ], [ -118.40108, 34.30972 ], [ -118.4009, 34.31003 ], [ -118.40079, 34.31644 ], [ -118.39972, 34.31646 ], [ -118.39843, 34.31703 ], [ -118.39728, 34.31712 ], [ -118.39653, 34.31742 ], [ -118.39652, 34.31807 ], [ -118.39628, 34.31807 ], [ -118.39626, 34.31986 ], [ -118.40066, 34.31954 ], [ -118.40272, 34.3213 ], [ -118.40491, 34.32208 ], [ -118.4052, 34.32981 ], [ -118.41358, 34.32988 ], [ -118.41358, 34.32741 ], [ -118.41221, 34.3259 ], [ -118.41359, 34.3251 ], [ -118.41359, 34.32469 ], [ -118.41435, 34.32469 ], [ -118.41435, 34.32444 ], [ -118.41589, 34.32449 ], [ -118.41905, 34.32566 ], [ -118.42075, 34.32557 ], [ -118.42074, 34.32772 ], [ -118.41946, 34.32793 ], [ -118.41821, 34.32949 ], [ -118.41864, 34.32943 ], [ -118.41901, 34.32988 ], [ -118.41946, 34.32988 ], [ -118.41946, 34.32916 ], [ -118.41998, 34.32916 ], [ -118.41998, 34.32988 ], [ -118.47234, 34.33012 ], [ -118.4844, 34.33028 ], [ -118.49272, 34.33062 ], [ -118.50381, 34.33731 ], [ -118.53401, 34.31453 ], [ -118.5463, 34.31733 ], [ -118.54551, 34.31566 ], [ -118.54709, 34.31335 ], [ -118.54367, 34.30571 ], [ -118.5443, 34.30394 ], [ -118.54333, 34.30326 ], [ -118.54259, 34.30136 ], [ -118.54156, 34.30022 ], [ -118.54082, 34.29881 ], [ -118.5467, 34.29787 ], [ -118.5498, 34.29697 ], [ -118.55403, 34.29641 ], [ -118.55443, 34.29657 ], [ -118.55479, 34.29712 ], [ -118.55739, 34.29924 ], [ -118.55977, 34.29919 ], [ -118.5621, 34.29879 ], [ -118.56355, 34.29785 ], [ -118.56447, 34.29689 ], [ -118.56609, 34.29582 ], [ -118.56637, 34.29543 ], [ -118.56742, 34.29495 ], [ -118.56774, 34.29507 ], [ -118.56871, 34.29464 ], [ -118.57015, 34.29536 ], [ -118.57016, 34.2958 ], [ -118.57102, 34.29693 ], [ -118.57158, 34.29795 ], [ -118.57176, 34.29862 ], [ -118.58509, 34.30348 ], [ -118.58688, 34.30315 ], [ -118.58853, 34.30322 ], [ -118.59094, 34.29767 ], [ -118.59118, 34.2918 ], [ -118.59164, 34.2877 ], [ -118.59197, 34.28685 ], [ -118.59176, 34.28557 ], [ -118.59127, 34.28383 ], [ -118.59109, 34.28364 ], [ -118.59101, 34.28244 ], [ -118.59217, 34.28236 ], [ -118.59191, 34.28063 ], [ -118.5917, 34.28023 ], [ -118.592, 34.27918 ], [ -118.59257, 34.27804 ], [ -118.59372, 34.27718 ], [ -118.59621, 34.27452 ], [ -118.60434, 34.27752 ], [ -118.60598, 34.27778 ], [ -118.60734, 34.27774 ], [ -118.62257, 34.27564 ], [ -118.62478, 34.27517 ], [ -118.62686, 34.27438 ], [ -118.62839, 34.27354 ], [ -118.63347, 34.26963 ], [ -118.63255, 34.26343 ], [ -118.63265, 34.24839 ], [ -118.63244, 34.23857 ], [ -118.63047, 34.23858 ], [ -118.63072, 34.23777 ], [ -118.63146, 34.23702 ], [ -118.64698, 34.23808 ], [ -118.64971, 34.22711 ], [ -118.65286, 34.22711 ], [ -118.65286, 34.22735 ], [ -118.65329, 34.22735 ], [ -118.65329, 34.22711 ], [ -118.65405, 34.22711 ], [ -118.65407, 34.22469 ], [ -118.65873, 34.22458 ], [ -118.65931, 34.22221 ], [ -118.65975, 34.22115 ], [ -118.65982, 34.21809 ], [ -118.65921, 34.21692 ], [ -118.65896, 34.21595 ], [ -118.65592, 34.21595 ], [ -118.65462, 34.21642 ], [ -118.65238, 34.21642 ], [ -118.65324, 34.21295 ], [ -118.66274, 34.2129 ], [ -118.66276, 34.20934 ], [ -118.6678, 34.20933 ], [ -118.66805, 34.19497 ], [ -118.65847, 34.19496 ], [ -118.65848, 34.19676 ], [ -118.65661, 34.19676 ], [ -118.65707, 34.19257 ], [ -118.65697, 34.19181 ], [ -118.65742, 34.18983 ], [ -118.6588, 34.18934 ], [ -118.65885, 34.18885 ], [ -118.66138, 34.18944 ], [ -118.66313, 34.19002 ], [ -118.66296, 34.19038 ], [ -118.66335, 34.1905 ], [ -118.66351, 34.19015 ], [ -118.66733, 34.19134 ], [ -118.66814, 34.19133 ], [ -118.66816, 34.18124 ] ] ], [ [ [ -118.35835, 34.07568 ], [ -118.35837, 34.07612 ], [ -118.35735, 34.07612 ], [ -118.35733, 34.07569 ], [ -118.35835, 34.07568 ] ] ], [ [ [ -118.41468, 33.98393 ], [ -118.41473, 33.98402 ], [ -118.41342, 33.98497 ], [ -118.40909, 33.98125 ], [ -118.40993, 33.98088 ], [ -118.41018, 33.9813 ], [ -118.41246, 33.9803 ], [ -118.41468, 33.98393 ] ] ], [ [ [ -118.29922, 33.84729 ], [ -118.29922, 33.85831 ], [ -118.29703, 33.85832 ], [ -118.29703, 33.84728 ], [ -118.29922, 33.84729 ] ] ], [ [ [ -118.41746, 34.1052 ], [ -118.41742, 34.10638 ], [ -118.4176, 34.10724 ], [ -118.41749, 34.1125 ], [ -118.41604, 34.11251 ], [ -118.41587, 34.11196 ], [ -118.41407, 34.11198 ], [ -118.41412, 34.11074 ], [ -118.41179, 34.1107 ], [ -118.41181, 34.10888 ], [ -118.40973, 34.10885 ], [ -118.40975, 34.10515 ], [ -118.41746, 34.1052 ] ] ], [ [ [ -118.30915, 33.73792 ], [ -118.30912, 33.74162 ], [ -118.30426, 33.74153 ], [ -118.30426, 33.73996 ], [ -118.30206, 33.73931 ], [ -118.30206, 33.7407 ], [ -118.30299, 33.7407 ], [ -118.30299, 33.74152 ], [ -118.30165, 33.74152 ], [ -118.30167, 33.74333 ], [ -118.29951, 33.74341 ], [ -118.2995, 33.74408 ], [ -118.29891, 33.74414 ], [ -118.29801, 33.74414 ], [ -118.29801, 33.74341 ], [ -118.29671, 33.74332 ], [ -118.29674, 33.73788 ], [ -118.30915, 33.73792 ] ] ], [ [ [ -118.36234, 34.1387 ], [ -118.36096, 34.14114 ], [ -118.36092, 34.14204 ], [ -118.36127, 34.14269 ], [ -118.35797, 34.14335 ], [ -118.35416, 34.14321 ], [ -118.34752, 34.14218 ], [ -118.34504, 34.14245 ], [ -118.34323, 34.13821 ], [ -118.34403, 34.13785 ], [ -118.34442, 34.1368 ], [ -118.34421, 34.13606 ], [ -118.34558, 34.13511 ], [ -118.34586, 34.13468 ], [ -118.34656, 34.13465 ], [ -118.34649, 34.13435 ], [ -118.34672, 34.13419 ], [ -118.34671, 34.13389 ], [ -118.34777, 34.13347 ], [ -118.34746, 34.13314 ], [ -118.34845, 34.13289 ], [ -118.34866, 34.13246 ], [ -118.3484, 34.13199 ], [ -118.34878, 34.13139 ], [ -118.34979, 34.13254 ], [ -118.35069, 34.13319 ], [ -118.35159, 34.13411 ], [ -118.35214, 34.13416 ], [ -118.3586, 34.1395 ], [ -118.36185, 34.13859 ], [ -118.36234, 34.1387 ] ] ], [ [ [ -118.46795, 34.06091 ], [ -118.46889, 34.06587 ], [ -118.46673, 34.06771 ], [ -118.46534, 34.06699 ], [ -118.4632, 34.06507 ], [ -118.46281, 34.06311 ], [ -118.4611, 34.06005 ], [ -118.45878, 34.05807 ], [ -118.45516, 34.06024 ], [ -118.45962, 34.06544 ], [ -118.45468, 34.0668 ], [ -118.45453, 34.06592 ], [ -118.45403, 34.06505 ], [ -118.45013, 34.06078 ], [ -118.44562, 34.0553 ], [ -118.44578, 34.05533 ], [ -118.44909, 34.05335 ], [ -118.44831, 34.05245 ], [ -118.44909, 34.052 ], [ -118.44818, 34.04958 ], [ -118.44836, 34.04937 ], [ -118.45222, 34.04706 ], [ -118.45424, 34.04942 ], [ -118.45684, 34.04802 ], [ -118.46795, 34.06091 ] ] ], [ [ [ -118.46233, 33.97975 ], [ -118.46348, 33.98105 ], [ -118.45505, 33.98642 ], [ -118.4483, 33.98466 ], [ -118.4416, 33.98338 ], [ -118.44039, 33.98194 ], [ -118.43873, 33.98032 ], [ -118.43654, 33.97851 ], [ -118.43356, 33.97648 ], [ -118.43226, 33.97502 ], [ -118.4513, 33.96423 ], [ -118.45476, 33.96968 ], [ -118.45453, 33.96984 ], [ -118.45748, 33.97379 ], [ -118.4576, 33.97372 ], [ -118.46062, 33.97744 ], [ -118.46142, 33.97836 ], [ -118.4618, 33.97827 ], [ -118.46197, 33.97937 ], [ -118.46233, 33.97975 ] ] ], [ [ [ -118.45568, 34.2846 ], [ -118.45601, 34.2849 ], [ -118.44944, 34.2897 ], [ -118.45, 34.2904 ], [ -118.4455, 34.29441 ], [ -118.44478, 34.2938 ], [ -118.44357, 34.29487 ], [ -118.44347, 34.29516 ], [ -118.44247, 34.29586 ], [ -118.43257, 34.30469 ], [ -118.42932, 34.30184 ], [ -118.4214, 34.29438 ], [ -118.41856, 34.29645 ], [ -118.41579, 34.29384 ], [ -118.41863, 34.29176 ], [ -118.41712, 34.29036 ], [ -118.43057, 34.28055 ], [ -118.43305, 34.27823 ], [ -118.43371, 34.27774 ], [ -118.43559, 34.27937 ], [ -118.44373, 34.27331 ], [ -118.45568, 34.2846 ] ] ], [ [ [ -118.42696, 34.08304 ], [ -118.42704, 34.09063 ], [ -118.42414, 34.09064 ], [ -118.4241, 34.09045 ], [ -118.42374, 34.0904 ], [ -118.42295, 34.09064 ], [ -118.42269, 34.09056 ], [ -118.42274, 34.09432 ], [ -118.41393, 34.09427 ], [ -118.41261, 34.09292 ], [ -118.41197, 34.09248 ], [ -118.41188, 34.09224 ], [ -118.41147, 34.0935 ], [ -118.40944, 34.09486 ], [ -118.40919, 34.09554 ], [ -118.40949, 34.09615 ], [ -118.40905, 34.09657 ], [ -118.40889, 34.09712 ], [ -118.40864, 34.09715 ], [ -118.40907, 34.09755 ], [ -118.40878, 34.09845 ], [ -118.409, 34.099 ], [ -118.40906, 34.10016 ], [ -118.40867, 34.10075 ], [ -118.40869, 34.10151 ], [ -118.40541, 34.10146 ], [ -118.40532, 34.0963 ], [ -118.40242, 34.09367 ], [ -118.40206, 34.09379 ], [ -118.40168, 34.09421 ], [ -118.4014, 34.09384 ], [ -118.40089, 34.09399 ], [ -118.4009, 34.09513 ], [ -118.40027, 34.09557 ], [ -118.40002, 34.09598 ], [ -118.40091, 34.0963 ], [ -118.40104, 34.10874 ], [ -118.39867, 34.10875 ], [ -118.40007, 34.11093 ], [ -118.3992, 34.11149 ], [ -118.39658, 34.11164 ], [ -118.39658, 34.11241 ], [ -118.39114, 34.11242 ], [ -118.39057, 34.1092 ], [ -118.39111, 34.10827 ], [ -118.39136, 34.10766 ], [ -118.39132, 34.10742 ], [ -118.39216, 34.10645 ], [ -118.39208, 34.09905 ], [ -118.39259, 34.09867 ], [ -118.39256, 34.0985 ], [ -118.39541, 34.09617 ], [ -118.39651, 34.09618 ], [ -118.3965, 34.09507 ], [ -118.39615, 34.09516 ], [ -118.39591, 34.09501 ], [ -118.39584, 34.09105 ], [ -118.38604, 34.09104 ], [ -118.38594, 34.09277 ], [ -118.38571, 34.09294 ], [ -118.38553, 34.09276 ], [ -118.38553, 34.0932 ], [ -118.38504, 34.0932 ], [ -118.38504, 34.09356 ], [ -118.38446, 34.09356 ], [ -118.38438, 34.09372 ], [ -118.38337, 34.09372 ], [ -118.38337, 34.09333 ], [ -118.38118, 34.09332 ], [ -118.38118, 34.0921 ], [ -118.3793, 34.09296 ], [ -118.37658, 34.09475 ], [ -118.3726, 34.09568 ], [ -118.37157, 34.09643 ], [ -118.36999, 34.09711 ], [ -118.36874, 34.09797 ], [ -118.3682, 34.09798 ], [ -118.36817, 34.09709 ], [ -118.36734, 34.0971 ], [ -118.36734, 34.09688 ], [ -118.36672, 34.09689 ], [ -118.36672, 34.09711 ], [ -118.36165, 34.09718 ], [ -118.36154, 34.09446 ], [ -118.34338, 34.09433 ], [ -118.34339, 34.0889 ], [ -118.3528, 34.08896 ], [ -118.3528, 34.08713 ], [ -118.3627, 34.08719 ], [ -118.36271, 34.08879 ], [ -118.36327, 34.08878 ], [ -118.36327, 34.08897 ], [ -118.36644, 34.08892 ], [ -118.36643, 34.08714 ], [ -118.37023, 34.08708 ], [ -118.37023, 34.08561 ], [ -118.37248, 34.08544 ], [ -118.3725, 34.09026 ], [ -118.37423, 34.08996 ], [ -118.37423, 34.08971 ], [ -118.37476, 34.0897 ], [ -118.37476, 34.08942 ], [ -118.37519, 34.08942 ], [ -118.37538, 34.08914 ], [ -118.37628, 34.08899 ], [ -118.37695, 34.08863 ], [ -118.37703, 34.08304 ], [ -118.3703, 34.08316 ], [ -118.37029, 34.08017 ], [ -118.37421, 34.08016 ], [ -118.3742, 34.08202 ], [ -118.37525, 34.08201 ], [ -118.37526, 34.08016 ], [ -118.37725, 34.08021 ], [ -118.37689, 34.07897 ], [ -118.37757, 34.07874 ], [ -118.37722, 34.07817 ], [ -118.37717, 34.07659 ], [ -118.37865, 34.07661 ], [ -118.3788, 34.07639 ], [ -118.37977, 34.0764 ], [ -118.38066, 34.07671 ], [ -118.38169, 34.07671 ], [ -118.38169, 34.0764 ], [ -118.39072, 34.0765 ], [ -118.3907, 34.07208 ], [ -118.38376, 34.07212 ], [ -118.38373, 34.06968 ], [ -118.3774, 34.06971 ], [ -118.37738, 34.06932 ], [ -118.37632, 34.06934 ], [ -118.37635, 34.06958 ], [ -118.37604, 34.06958 ], [ -118.37604, 34.06981 ], [ -118.37575, 34.0701 ], [ -118.37508, 34.06875 ], [ -118.37203, 34.06387 ], [ -118.37224, 34.0622 ], [ -118.376, 34.05996 ], [ -118.37601, 34.05961 ], [ -118.37617, 34.05946 ], [ -118.37727, 34.05938 ], [ -118.37733, 34.06295 ], [ -118.38353, 34.06294 ], [ -118.38367, 34.0571 ], [ -118.39971, 34.0571 ], [ -118.40004, 34.05685 ], [ -118.40028, 34.0571 ], [ -118.40078, 34.05687 ], [ -118.40091, 34.057 ], [ -118.40075, 34.0571 ], [ -118.40127, 34.0571 ], [ -118.40158, 34.05691 ], [ -118.40168, 34.05703 ], [ -118.40156, 34.0571 ], [ -118.40189, 34.05709 ], [ -118.40227, 34.05689 ], [ -118.40237, 34.057 ], [ -118.40218, 34.0571 ], [ -118.40246, 34.0571 ], [ -118.40277, 34.05689 ], [ -118.40293, 34.05705 ], [ -118.40326, 34.05683 ], [ -118.40345, 34.05702 ], [ -118.40399, 34.0571 ], [ -118.40592, 34.0571 ], [ -118.40593, 34.05483 ], [ -118.40545, 34.05486 ], [ -118.40529, 34.0544 ], [ -118.40556, 34.05431 ], [ -118.40556, 34.05414 ], [ -118.40612, 34.05414 ], [ -118.40548, 34.05285 ], [ -118.40602, 34.05267 ], [ -118.41155, 34.06043 ], [ -118.4122, 34.0601 ], [ -118.41417, 34.06284 ], [ -118.41351, 34.06316 ], [ -118.41725, 34.06838 ], [ -118.41637, 34.06884 ], [ -118.41738, 34.07021 ], [ -118.41846, 34.07236 ], [ -118.41964, 34.07265 ], [ -118.42093, 34.07543 ], [ -118.42184, 34.07509 ], [ -118.42255, 34.07527 ], [ -118.42329, 34.07569 ], [ -118.42277, 34.07705 ], [ -118.4233, 34.07757 ], [ -118.42363, 34.07876 ], [ -118.42348, 34.07881 ], [ -118.42383, 34.07974 ], [ -118.42279, 34.07996 ], [ -118.42278, 34.08309 ], [ -118.42696, 34.08304 ] ] ], [ [ [ -118.4481, 33.99262 ], [ -118.44847, 33.99336 ], [ -118.44471, 33.99437 ], [ -118.44335, 33.99532 ], [ -118.44246, 33.9936 ], [ -118.43581, 33.99692 ], [ -118.43531, 33.9969 ], [ -118.43033, 33.99945 ], [ -118.43084, 34.0001 ], [ -118.42849, 34.00134 ], [ -118.42598, 33.99807 ], [ -118.4204, 33.99869 ], [ -118.41918, 34.00003 ], [ -118.41824, 34.00062 ], [ -118.42125, 34.00442 ], [ -118.41734, 34.00675 ], [ -118.41923, 34.0091 ], [ -118.42009, 34.00865 ], [ -118.42141, 34.01032 ], [ -118.40686, 34.01857 ], [ -118.40546, 34.01685 ], [ -118.40048, 34.0199 ], [ -118.40129, 34.02109 ], [ -118.40061, 34.02147 ], [ -118.40025, 34.02086 ], [ -118.39949, 34.02129 ], [ -118.3991, 34.02079 ], [ -118.3988, 34.02086 ], [ -118.39745, 34.02166 ], [ -118.39835, 34.02292 ], [ -118.39408, 34.02531 ], [ -118.3942, 34.02556 ], [ -118.39394, 34.02571 ], [ -118.39345, 34.02537 ], [ -118.39289, 34.02613 ], [ -118.38717, 34.0294 ], [ -118.3868, 34.02913 ], [ -118.38666, 34.02921 ], [ -118.3864, 34.02891 ], [ -118.38421, 34.03021 ], [ -118.37592, 34.03242 ], [ -118.36958, 34.03508 ], [ -118.3719, 34.02993 ], [ -118.37364, 34.03042 ], [ -118.37622, 34.02865 ], [ -118.37694, 34.02697 ], [ -118.3771, 34.02623 ], [ -118.37637, 34.02585 ], [ -118.3767, 34.02399 ], [ -118.37695, 34.02375 ], [ -118.37737, 34.0227 ], [ -118.378, 34.0221 ], [ -118.37795, 34.02138 ], [ -118.3784, 34.02131 ], [ -118.37834, 34.02118 ], [ -118.37808, 34.02122 ], [ -118.37819, 34.01922 ], [ -118.37967, 34.01931 ], [ -118.37797, 34.01802 ], [ -118.37763, 34.01793 ], [ -118.37585, 34.01805 ], [ -118.37589, 34.01852 ], [ -118.37281, 34.01836 ], [ -118.37263, 34.01847 ], [ -118.37374, 34.01638 ], [ -118.37407, 34.01513 ], [ -118.37393, 34.01387 ], [ -118.37309, 34.01191 ], [ -118.37286, 34.01192 ], [ -118.37265, 34.01584 ], [ -118.36672, 34.01562 ], [ -118.36717, 34.00709 ], [ -118.36684, 34.00708 ], [ -118.36623, 34.00635 ], [ -118.36503, 34.00556 ], [ -118.36266, 34.00632 ], [ -118.36206, 34.00695 ], [ -118.36198, 34.00748 ], [ -118.36145, 34.00769 ], [ -118.36144, 34.00833 ], [ -118.35862, 34.00906 ], [ -118.35754, 34.00914 ], [ -118.35749, 34.00724 ], [ -118.35912, 34.00163 ], [ -118.35903, 34.00102 ], [ -118.35819, 33.99927 ], [ -118.3578, 33.99715 ], [ -118.35717, 33.99751 ], [ -118.35682, 33.99796 ], [ -118.35647, 33.99968 ], [ -118.35594, 34.00062 ], [ -118.35427, 34.00188 ], [ -118.35204, 34.00407 ], [ -118.35135, 34.00455 ], [ -118.35052, 34.00487 ], [ -118.34955, 34.00498 ], [ -118.3459, 34.00449 ], [ -118.34168, 34.00462 ], [ -118.33823, 34.0063 ], [ -118.33689, 34.00769 ], [ -118.33569, 34.00826 ], [ -118.33552, 34.00724 ], [ -118.33512, 34.00633 ], [ -118.3338, 34.0045 ], [ -118.33212, 34.00297 ], [ -118.33149, 34.00149 ], [ -118.33163, 33.99633 ], [ -118.33728, 33.99631 ], [ -118.33725, 33.98947 ], [ -118.33775, 33.98947 ], [ -118.33775, 33.98898 ], [ -118.33727, 33.98899 ], [ -118.33727, 33.98849 ], [ -118.34247, 33.98845 ], [ -118.34249, 33.98942 ], [ -118.35268, 33.98933 ], [ -118.35268, 33.98306 ], [ -118.3717, 33.983 ], [ -118.37181, 33.97732 ], [ -118.37718, 33.97702 ], [ -118.38034, 33.97635 ], [ -118.38525, 33.97664 ], [ -118.3864, 33.97709 ], [ -118.38658, 33.97663 ], [ -118.38674, 33.97672 ], [ -118.38665, 33.97691 ], [ -118.39765, 33.98207 ], [ -118.39757, 33.98219 ], [ -118.39846, 33.98318 ], [ -118.3949, 33.98385 ], [ -118.39867, 33.98801 ], [ -118.40124, 33.98639 ], [ -118.4062, 33.9894 ], [ -118.40515, 33.9905 ], [ -118.40786, 33.99212 ], [ -118.40589, 33.99298 ], [ -118.4055, 33.99332 ], [ -118.40496, 33.9943 ], [ -118.40503, 33.99459 ], [ -118.40282, 33.99583 ], [ -118.40098, 33.99912 ], [ -118.40108, 33.99985 ], [ -118.40159, 33.99996 ], [ -118.40092, 34.00095 ], [ -118.4008, 34.00142 ], [ -118.40005, 34.00141 ], [ -118.39982, 34.00161 ], [ -118.39979, 34.00183 ], [ -118.40277, 34.00346 ], [ -118.40589, 33.99924 ], [ -118.40908, 34.00121 ], [ -118.40964, 34.0005 ], [ -118.41423, 34.00343 ], [ -118.41436, 34.00366 ], [ -118.41606, 34.0005 ], [ -118.41805, 33.9992 ], [ -118.41902, 33.99804 ], [ -118.41967, 33.99761 ], [ -118.42844, 33.99656 ], [ -118.4311, 33.99638 ], [ -118.43018, 33.99012 ], [ -118.42972, 33.98976 ], [ -118.43087, 33.98919 ], [ -118.43246, 33.99145 ], [ -118.43717, 33.99528 ], [ -118.44702, 33.99052 ], [ -118.4481, 33.99262 ] ] ] ] }
    };

    layers.push(new LayerModel({
        name: 'Los Angeles City Limits',
        icon: 'fa fa-bookmark-o',
        visibleZoomRange: '9-20',
        onMap: true,
        layer: new ol.layer.Vector({
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                	color: 'rgba(234,234,234,0.50)'
                }),
                stroke: new ol.style.Stroke({
                    color: '#999',
                    width: 1
                })
            }),
            source: new ol.source.GeoJSON({
                projection: 'EPSG:3857',
                object: {
                    'type': 'FeatureCollection',
                    'crs': {
                      'type': 'name',
                      'properties': {
                        'name': 'EPSG:4326'
                      }
                    },
                    'features': [cityLimitFeature]
                }
            })
        })
    }));

    layers.push(new LayerModel({
        name: 'Los Angeles Parcels',
        icon: 'fa fa-bookmark-o',
        visibleZoomRange: '15-20',
        layer: new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://egis3.lacounty.gov/arcgis/rest/services/LACounty_Cache/LACounty_Parcel/MapServer/tile/{z}/{y}/{x}'
            })
        })
    }));

    return layers;
});