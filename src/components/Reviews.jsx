export default function Reviews() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Most of your online and real-life experiences are shaped by reviews—reviews that can't be verified.
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              They're easily manipulated by review platforms, the businesses they serve, or even their competitors.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-6">
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                  <div className="ml-3">
                    <p className="text-white">Jane Lephta</p>
                    <p className="text-gray-400 text-sm">Influencer</p>
                  </div>
                </div>
                <p className="text-white mt-2">Nandos Has The Best Chicken Burger</p>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-400">👍 500</span>
                  <span className="text-gray-400">👎 5k</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="ml-3">
                    <p>Austin Graham</p>
                    <p className="text-gray-600 text-sm">Verified Customer</p>
                  </div>
                </div>
                <p className="mt-2">Nandos Has The Worst Chicken Burger</p>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-600">👍 5k</span>
                  <span className="text-gray-600">👎 500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}