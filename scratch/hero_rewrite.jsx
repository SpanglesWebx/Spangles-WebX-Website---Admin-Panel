      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bannerImg}
            alt="Blog banner"
            className="h-full w-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,12,18,0.96)_10%,rgba(15,23,32,0.88)_40%,rgba(15,23,32,0.6)_70%,rgba(15,23,32,0.2)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,167,108,0.3),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(126,166,186,0.22),transparent_40%)]" />
        </div>

        <div className="absolute -left-16 top-24 h-80 w-80 rounded-full bg-[#d5a46b]/25 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#80a9c0]/20 blur-[150px]" />

        <div className="relative mx-auto max-w-[1440px] px-6 pb-2 pt-4 md:px-10 xl:px-16">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-3xl">
                <span className="flex h-1 w-1 rounded-full bg-[#d5a46b]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#f4d4ab]">Intelligence Hub</span>
              </div>

              <h1 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[48px] lg:text-[56px] mix-blend-plus-lighter">
                Stories for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecd7bb] to-[#d5a46b] italic font-serif">ambitious minds.</span>
              </h1>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="relative group/search w-full sm:w-[320px]">
                  <Search className="absolute left-6 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                  <input
                    type="text"
                    placeholder="Search Archive..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-10 w-full rounded-xl border border-white/10 bg-white/5 pl-12 pr-6 text-white text-[11px] placeholder:text-white/20 backdrop-blur-3xl outline-none focus:border-[#d5a46b]/40 focus:bg-white/10 shadow-2xl transition-all"
                  />
                </div>
                <div className="hidden sm:flex items-center gap-3 text-[10px] font-bold uppercase tracking-[3px] text-white/30">
                  <TrendingUp size={14} className="text-[#d5a46b]" />
                  <span>{posts.length} ANALYTICS</span>
                </div>
              </div>
            </motion.div>

            {featuredPost && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-[32px] border border-white/10 bg-white/[0.03] p-2.5 shadow-[0_64px_128px_-32px_rgba(0,0,0,0.6)] backdrop-blur-3xl saturate-200 group/featured transform xl:translate-y-20"
              >
                <div onClick={() => navigate(`/blog/${featuredPost.id}`)} className="cursor-pointer">
                    <div className="overflow-hidden rounded-[24px] relative aspect-[3.5/2.8] w-[440px] max-w-full">
                      {featuredPost.image ? (
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="h-full w-full object-cover grayscale-[0.2] group-hover/featured:grayscale-0 transition-all duration-1000"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[#16212b] text-white/20 uppercase tracking-[1em] text-[8px]">Archive Fragment</div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#16212b]/90 via-transparent to-transparent opacity-0 group-hover/featured:opacity-100 transition-opacity duration-700" />
                    </div>

                    <div className="p-4 pt-6">
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#d5a46b]">
                        <span className="bg-[#d5a46b] px-3 py-1 rounded-full text-[#16212b]">SPOTLIGHT</span>
                        <span className="text-white/40">{featuredPost.category}</span>
                      </div>

                      <h2 className="text-[20px] font-semibold leading-tight tracking-tight text-white mb-4 line-clamp-2 group-hover:text-[#ecd7bb] transition-colors">
                        {featuredPost.title}
                      </h2>

                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/30">
                        <span>{featuredPost.readTime}</span>
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                      </div>
                    </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
